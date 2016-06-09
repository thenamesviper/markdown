import { Component } from "@angular/core";

import { SINGLELINECHEATS } from "./singlelinecheats";
import { MULTILINECHEATS } from "./multilinecheats";

declare var codeblock: any;
declare var marked: any;

@Component({
    selector: "md-app", 
    templateUrl: "app/markdown.component.html",
    styleUrls: ["app/markdown.component.css"]
})

export class MarkdownAppComponent{
    text: string = "";
    opentab: string = "Cheat Sheet";
    cheatopen: boolean = false;
    aboutopen: boolean = false;
    singlelineCheats: Array<string> = SINGLELINECHEATS;
    multilineCheats: Array<Object> = MULTILINECHEATS;
    
    getMarkdown() {
        let temp = codeblock(this.text);
        return marked(temp);
    }
    
    marking(text: string) {
        let temp = codeblock(text);
        return marked(temp);
    }
  
    toggleCheat() {
      if (!this.aboutopen) {
        this.cheatopen = !this.cheatopen;
      }
    }

    toggleAbout() {
      if (!this.cheatopen) {
        this.aboutopen = !this.aboutopen;
      }
    }


}