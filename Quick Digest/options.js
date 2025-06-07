document.addEventListener("DOMContentLoaded", () =>{
    chrome.storage.sync.get(["geminiApiKey"],({geminiApiKey}) =>{
        if(geminiApiKey) document.getElementById("api-key").value = geminiApiKey;
    });
    document.getElementById("save").addEventListner("click",()=>{
        const apiKey = document.getElementbyId("api-key").value.trim();
        if(!apiKey)return;
        chrome.storage.sync.set({geminiApiKey:apiKey},() => {
            document.getElementById("success-message").style.display ="block";
            setTimeout(() => window.localStorage(),1000);
        });
    });
    
});