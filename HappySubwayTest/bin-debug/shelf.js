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
var shelf = (function (_super) {
    __extends(shelf, _super);
    function shelf() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/GongYi.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.Duihuanquan, _this);
        return _this;
    }
    shelf.prototype.onComplete = function () {
        this.duihuan.touchEnabled = true;
        this.duihuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TapDuiHuan, this);
        this.TC.touchEnabled = true;
        this.TC.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TUICHU, this);
    };
    shelf.prototype.Duihuanquan = function () {
        var G1;
        this.W = new WareHouse();
        if (this.W.Finish() == true) {
            if (egret.localStorage.getItem("B1")) {
                G1 = egret.localStorage.getItem("B1");
            }
            else {
                G1 = "0";
            }
            console.log(G1);
            console.log("B1");
            var x1 = (parseInt(G1) + 1).toString();
            egret.localStorage.setItem("B1", x1);
            this.text = new egret.TextField();
            this.text.text = x1;
            this.text.x = 477.78;
            this.text.y = 280.91;
            this.text.textColor = 0x000000;
            this.text.size = 70;
            this.addChild(this.text);
        }
        else {
            if (egret.localStorage.getItem("B1")) {
                G1 = egret.localStorage.getItem("B1");
            }
            else {
                G1 = "0";
            }
            this.text = new egret.TextField();
            this.text.text = G1;
            this.text.x = 477.78;
            this.text.y = 280.91;
            this.text.textColor = 0x000000;
            this.text.size = 70;
            this.addChild(this.text);
        }
    };
    shelf.prototype.TapDuiHuan = function () {
        var data = parseInt(egret.localStorage.getItem("B1"));
        if (data >= 1) {
            var x2 = (data - 1).toString();
            egret.localStorage.setItem("B1", x2);
            alert("兑换成功！");
        }
        else {
            alert("您还没有兑换券哦！");
        }
    };
    shelf.prototype.TUICHU = function () {
        SceneManager.Instance.closeScene();
    };
    return shelf;
}(Scene));
__reflect(shelf.prototype, "shelf");
//# sourceMappingURL=shelf.js.map