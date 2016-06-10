"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var singlelinecheats_1 = require("./singlelinecheats");
var multilinecheats_1 = require("./multilinecheats");
var MarkdownAppComponent = (function () {
    function MarkdownAppComponent() {
        this.text = "";
        this.opentab = "Cheat Sheet";
        this.cheatopen = false;
        this.aboutopen = false;
        this.singlelineCheats = singlelinecheats_1.SINGLELINECHEATS;
        this.multilineCheats = multilinecheats_1.MULTILINECHEATS;
    }
    MarkdownAppComponent.prototype.getMarkdown = function () {
        var temp = codeblock(this.text);
        return marked(temp);
    };
    MarkdownAppComponent.prototype.marking = function (text) {
        var temp = codeblock(text);
        return marked(temp);
    };
    MarkdownAppComponent.prototype.toggleCheat = function () {
        if (!this.aboutopen) {
            this.cheatopen = !this.cheatopen;
        }
    };
    MarkdownAppComponent.prototype.toggleAbout = function () {
        if (!this.cheatopen) {
            this.aboutopen = !this.aboutopen;
        }
    };
    MarkdownAppComponent = __decorate([
        core_1.Component({
            selector: "md-app",
            templateUrl: "app/markdown.component.html",
            styleUrls: ["app/markdown.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownAppComponent);
    return MarkdownAppComponent;
}());
exports.MarkdownAppComponent = MarkdownAppComponent;
//# sourceMappingURL=markdown.component.js.map