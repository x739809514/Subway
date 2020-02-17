var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript file
var gameover2 = (function (_super) {
    __extends(gameover2, _super);
    function gameover2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/gameover.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    gameover2.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.Gift, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("cangku");
    };
    gameover2.prototype.onComplete = function () {
        this.GOver.touchEnabled = true;
        this.GOver.addEventListener(egret.TouchEvent.TOUCH_TAP, this.GameOver, this);
    };
    gameover2.prototype.GameOver = function () {
        var s1 = new GameScene2();
        SceneManager.Instance.changeScene(s1);
        egret.localStorage.removeItem('snake');
    };
    gameover2.prototype.Gift = function () {
        this.gift = parseInt(egret.localStorage.getItem('snake'));
        if (this.gift >= 10 && this.gift < 20) {
            this.CreateBitmap();
            this.Count();
        }
        else if (this.gift >= 20) {
            this.CreateBitmap();
            this.CreateBitmap2();
            this.Count();
        }
    };
    gameover2.prototype.CreateBitmap = function () {
        this.s = Math.floor(Math.random() * (18 - 1 + 1)) + 1; //创建1-18之间的随机数字
        this.a = this.s.toString();
        this.t = new egret.Bitmap(); //创建零件位图	
        this.t.texture = RES.getRes(this.a); //根据数字找到图片的编号
        this.addChild(this.t);
        this.t.x = 171.98;
        this.t.y = 452.94;
        this.t.scaleX = 0.2;
        this.t.scaleY = 0.2;
    };
    gameover2.prototype.CreateBitmap2 = function () {
        this.s = Math.floor(Math.random() * (18 - 1 + 1)) + 1; //创建1-18之间的随机数字
        this.a = this.s.toString();
        this.t2 = new egret.Bitmap(); //创建零件位图	
        this.t2.texture = RES.getRes(this.a); //根据数字找到图片的编号
        this.addChild(this.t2);
        this.t2.x = 361.31;
        this.t2.y = 452.94;
        this.t2.scaleX = 0.2;
        this.t2.scaleY = 0.2;
    };
    gameover2.prototype.Count = function () {
        if (this.s == 1) {
            if (egret.localStorage.getItem("g1")) {
                this.G1 = egret.localStorage.getItem("g1");
            }
            else {
                this.G1 = "0";
            }
            console.log(this.G1);
            console.log("g1");
            var x1 = (parseInt(this.G1) + 1).toString();
            egret.localStorage.setItem("g1", x1);
        }
        else if (this.s == 2) {
            if (egret.localStorage.getItem("g2")) {
                this.G2 = egret.localStorage.getItem("g2");
            }
            else {
                this.G2 = "0";
            }
            console.log(this.G2);
            console.log("g2");
            var x2 = (parseInt(this.G2) + 1).toString();
            egret.localStorage.setItem("g2", x2);
        }
        else if (this.s == 3) {
            if (egret.localStorage.getItem("g3")) {
                this.G3 = egret.localStorage.getItem("g3");
            }
            else {
                this.G3 = "0";
            }
            console.log(this.G3);
            console.log("g3");
            var x3 = (parseInt(this.G3) + 1).toString();
            egret.localStorage.setItem("g3", x3);
        }
        else if (this.s == 4) {
            if (egret.localStorage.getItem("g4")) {
                this.G4 = egret.localStorage.getItem("g4");
            }
            else {
                this.G4 = "0";
            }
            console.log(this.G4);
            console.log("g4");
            var x4 = (parseInt(this.G4) + 1).toString();
            egret.localStorage.setItem("g4", x4);
        }
        else if (this.s == 5) {
            if (egret.localStorage.getItem("g5")) {
                this.G5 = egret.localStorage.getItem("g5");
            }
            else {
                this.G5 = "0";
            }
            console.log(this.G5);
            console.log("g5");
            var x5 = (parseInt(this.G5) + 1).toString();
            egret.localStorage.setItem("g5", x5);
        }
        else if (this.s == 6) {
            if (egret.localStorage.getItem("g6")) {
                this.G6 = egret.localStorage.getItem("g6");
            }
            else {
                this.G6 = "0";
            }
            console.log(this.G6);
            console.log("g6");
            var x6 = (parseInt(this.G6) + 1).toString();
            egret.localStorage.setItem("g6", x6);
        }
        else if (this.s == 7) {
            if (egret.localStorage.getItem("g7")) {
                this.G7 = egret.localStorage.getItem("g7");
            }
            else {
                this.G7 = "0";
            }
            console.log(this.G7);
            console.log("g7");
            var x7 = (parseInt(this.G7) + 1).toString();
            egret.localStorage.setItem("g7", x7);
        }
        else if (this.s == 8) {
            if (egret.localStorage.getItem("g8")) {
                this.G8 = egret.localStorage.getItem("g8");
            }
            else {
                this.G8 = "0";
            }
            console.log(this.G8);
            console.log("g8");
            var x8 = (parseInt(this.G8) + 1).toString();
            egret.localStorage.setItem("g8", x8);
        }
        else if (this.s == 9) {
            if (egret.localStorage.getItem("g9")) {
                this.G9 = egret.localStorage.getItem("g9");
            }
            else {
                this.G9 = "0";
            }
            console.log(this.G9);
            console.log("g9");
            var x9 = (parseInt(this.G9) + 1).toString();
            egret.localStorage.setItem("g9", x9);
        }
        else if (this.s == 10) {
            if (egret.localStorage.getItem("g10")) {
                this.G10 = egret.localStorage.getItem("g10");
            }
            else {
                this.G10 = "0";
            }
            console.log(this.G10);
            console.log("g10");
            var x10 = (parseInt(this.G10) + 1).toString();
            egret.localStorage.setItem("g10", x10);
        }
        else if (this.s == 11) {
            if (egret.localStorage.getItem("g11")) {
                this.G11 = egret.localStorage.getItem("g11");
            }
            else {
                this.G11 = "0";
            }
            console.log(this.G11);
            console.log("g11");
            var x11 = (parseInt(this.G11) + 1).toString();
            egret.localStorage.setItem("g11", x11);
        }
        else if (this.s == 12) {
            if (egret.localStorage.getItem("g12")) {
                this.G12 = egret.localStorage.getItem("g12");
            }
            else {
                this.G12 = "0";
            }
            console.log(this.G12);
            console.log("g12");
            var x12 = (parseInt(this.G12) + 1).toString();
            egret.localStorage.setItem("g12", x12);
        }
        else if (this.s == 13) {
            if (egret.localStorage.getItem("g13")) {
                this.G13 = egret.localStorage.getItem("g13");
            }
            else {
                this.G13 = "0";
            }
            console.log(this.G13);
            console.log("g13");
            var x13 = (parseInt(this.G13) + 1).toString();
            egret.localStorage.setItem("g13", x13);
        }
        else if (this.s == 14) {
            if (egret.localStorage.getItem("g14")) {
                this.G14 = egret.localStorage.getItem("g14");
            }
            else {
                this.G14 = "0";
            }
            console.log(this.G14);
            console.log("g14");
            var x14 = (parseInt(this.G14) + 1).toString();
            egret.localStorage.setItem("g14", x14);
        }
        else if (this.s == 15) {
            if (egret.localStorage.getItem("g15")) {
                this.G15 = egret.localStorage.getItem("g15");
            }
            else {
                this.G15 = "0";
            }
            console.log(this.G15);
            console.log("g15");
            var x15 = (parseInt(this.G15) + 1).toString();
            egret.localStorage.setItem("g15", x15);
        }
        else if (this.s == 16) {
            if (egret.localStorage.getItem("g16")) {
                this.G16 = egret.localStorage.getItem("g16");
            }
            else {
                this.G16 = "0";
            }
            console.log(this.G16);
            console.log("g16");
            var x16 = (parseInt(this.G16) + 1).toString();
            egret.localStorage.setItem("g16", x16);
        }
        else if (this.s == 17) {
            if (egret.localStorage.getItem("g17")) {
                this.G17 = egret.localStorage.getItem("g17");
            }
            else {
                this.G17 = "0";
            }
            console.log(this.G17);
            console.log("g17");
            var x17 = (parseInt(this.G17) + 1).toString();
            egret.localStorage.setItem("g17", x17);
        }
        else if (this.s == 18) {
            if (egret.localStorage.getItem("g18")) {
                this.G18 = egret.localStorage.getItem("g18");
            }
            else {
                this.G18 = "0";
            }
            console.log(this.G18);
            console.log("g18");
            var x18 = (parseInt(this.G18) + 1).toString();
            egret.localStorage.setItem("g18", x18);
        }
    };
    return gameover2;
}(Scene));
__reflect(gameover2.prototype, "gameover2");
//# sourceMappingURL=gameover2.js.map