//"cheats" here are difficult to render correctly with just one string, as done in single line cheats
"use strict";
//cheats that don't work with marked.js: (could try to implement these in future)
//codeblocks [IMPLEMENTED!]
//definitions
//footnotes
//abbreviations
exports.MULTILINECHEATS = [
    {
        "unmarked": "Two spaces at the end of a line<br>allow for line breaking",
        "marked": "Two spaces at the end of a line  \nallow for line breaking"
    },
    {
        "unmarked": "~~~~<br>function multilineCode(){<br>&nbsp&nbsp&nbsp&nbsp return true;<br>}<br>~~~~",
        "marked": "~~~~\nfunction multilineCode(){ \n    return true;\n}\n~~~~"
    },
    {
        "unmarked": ">Blockquote<br>>>Indented Blockquote<br><br>Back to normal",
        "marked": ">Blockquote\n>>Indented Blockquote\n\nBack to normal"
    },
    {
        "unmarked": "1. First ordered item<br>&nbsp*First unordered sub-item<br>2. Second ordered item<br><br>Back to normal",
        "marked": "1. First unordered item\n * First unordered sub-item\n2. Second ordered item\n\nBack to normal"
    },
    {
        "unmarked": "Horizontal<br>--- or *** or ---<br>rule",
        "marked": "Horizontal\n___\nrule"
    }
];
//# sourceMappingURL=multilinecheats.js.map