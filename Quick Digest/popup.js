document.getElementById("summarize").addEventListener("click",() => {
    const resultDiv = document.getElementById("result");
    const summaryType = document.getElementById("summary-type").value;

    // Get User API Key
    chrome.storage.sync.get(["geminiApiKey"],({geminiApiKey}) =>{
        if(!geminiApiKey){
            resultDiv.textContent = "Please set your Gemini API key in options.";
            return;
     
        }
        //Ask Content.js for page Text
        chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
            chrome.tabs.sendMessage(
                tab.id,
                {type:"GET_ARTICLE_TEXT"},
                async ({text}) => {
                    if(!text){
                        resultDiv.textContent = "Coundn't extract text from the page.";
                        return;
                    }
                    //Send Text to Gemini
                    try{
                        const summary = await getGeminiSummary(
                            text,
                            summaryType,
                            geminiApiKey
                        );
                        resultDiv.textContent = summary;
                    }catch(error){
                        resultDiv.textContent = "Gemini Error "+ err.message;
                    };
                    
                   
                }
            );
    
        });

    
    });   
});

async function getGeminiSummary(rawText,type,apiKey){
    const max = 20000;
    const text = rawText.length > max ? rawText.slice(0,max) +"..." : rawText;
    const promptMap={
        brief: `Summarize in 2-3 sentences:\n\n${text}`,
        detailed: `give a detailed summary of the following text:\n\n${text}`,
        bulletPoints: `Summarize the following text in bullet points:\n\n${text}`,
    };
    const prompt= promptMap[type] || promptMap.brief;
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateContent?key=${apiKey}`,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig:{temperature:0.2},
            }),

        }
    );
    if(!res.ok){
        const {error} = await res.json();
        throw new Error(error?.message || "Request Failed");
    }
    const data =await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No summary.";
}
document.getElementById("options").addEventListener("click",() => {
    const txt = document.getElemnetById("result").innerText;
    if(!txt) return;
    navigator.clipboard.writeText(txt).then(() => {
        const btn = document.getElementById("copy-btn");
        const old = btn.textContent;
        btn.textConntent = "Copied!";
        setTimeout(() =>(btn.textContent = old),2000);
    });
});