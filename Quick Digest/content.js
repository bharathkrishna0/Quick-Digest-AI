function getArticleText(){
    const article = document.querySelector("article");
    if(article) return article.innerText;
    const paragraphs = Array.from(document.querySelectorAll("p"));
    if(paragraphs.length > 0) {
        return paragraphs.map(p => p.innerText).join("\n");
    }
}
chrome.runtime.OnMessage.addlistner((req,_sender,sendResponse)=> {
    if((req.type ="GET_ARTICLE_TEXT")){
        const text = getArticleText();
        sendResponse({text});
    }
});