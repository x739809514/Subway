// TypeScript file
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
var Tanchu2 = (function (_super) {
    __extends(Tanchu2, _super);
    function Tanchu2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/TanChu.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onComplete, _this);
        return _this;
    }
    Tanchu2.prototype.onComplete = function () {
        this.spr = new egret.Sprite();
        this.addChild(this.spr);
        this.spr.x = 0;
        this.spr.y = 0;
        this.spr.width = 640;
        this.spr.height = 1136;
        this.Back.touchEnabled = true;
        this.Back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    Tanchu2.prototype.onTapqiehuan = function () {
        var s1 = new GameScene2();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
    };
    return Tanchu2;
}(Scene));
__reflect(Tanchu2.prototype, "Tanchu2");
//# sourceMappingURL=Tanchu2.js.map