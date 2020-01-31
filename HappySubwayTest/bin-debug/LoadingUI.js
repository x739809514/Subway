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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this._distance = 380;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onaddToStage, _this);
        return _this;
    }
    LoadingUI.prototype.onaddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.createView, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("subway");
    };
    LoadingUI.prototype.createView = function () {
        var sky = new egret.Bitmap();
        this.addChild(sky);
        var stageW = 640;
        var stageH = 1136;
        sky.width = stageW;
        sky.height = stageH;
        // let stageX = this.stage.stageWidth, stageY = this.stage.stageHeight;
        var spr = new egret.Sprite();
        this.addChild(spr);
        this.textField = new egret.TextField();
        spr.addChild(this.textField);
        spr.width = 480;
        spr.height = 100;
        spr.x = 40;
        spr.y = 350;
        this.textField.x = spr.x;
        this.textField.y = spr.y;
        this.textField.textAlign = "center";
        var Bar = new egret.Shape();
        Bar.graphics.beginFill(0xffffff);
        Bar.graphics.drawRoundRect(0, 0, 480, 30, 20);
        Bar.graphics.endFill();
        spr.addChild(Bar);
        Bar.x = spr.x;
        Bar.y = spr.y;
        var current = new egret.Shape();
        current.graphics.beginFill(0xff0000);
        current.graphics.drawRoundRect(0, 0, this._linpec, 30, 20);
        current.graphics.endFill();
        spr.addChild(current);
        current.x = spr.x;
        current.y = spr.y;
        this.textField.text = "" + this._pec + "%";
    };
    LoadingUI.prototype.setProgress = function (cur, total) {
        this._distance = cur / total * 350;
        this._linpec = cur / total * 280;
        this._pec = Math.round((cur / total) * 100) + "%";
        this.createView();
        if (cur / total == 1) {
        }
    };
    return LoadingUI;
}(egret.DisplayObjectContainer));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map