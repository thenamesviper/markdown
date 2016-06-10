//check if a codeblock is found and format it with spans to style it
function codeblock(text) {
    let reg =/~~~~[\s\S]*?[\s\S]~~~~/;
    let finalText = "";


    //~~~~ is turned into <pre></pre> and \n is turned into <span></span>
    function alter(snippet) {
        let codeHtml = "<pre class = 'codecontainer'>" + snippet.substring(4, snippet.length-4) + "</pre>";
        let spanned = codeHtml.replace(/\n/g, "</span><span class='codeblock'>");

        //these get rid of first and last spans..poor way of doing this I'm sure..
        spanned = spanned.replace("<span class='codeblock'></pre>", "</pre>");
        return spanned.replace(/<\/span>/, "");
    }  
    
    //finds matches, adds to final text htmlized when code block
    while(text.length > 0){
        let match = text.match(reg);
        if(Array.isArray(match)){
            if(match.index > 0){
                finalText += text.substring(0, match.index);  
                text = text.substring(match.index);
            }
            finalText += alter(match[0]);
            text = text.substring(match[0].length);
        } else {
            finalText += text;
            text = "";
        }
    }
    return finalText;
}