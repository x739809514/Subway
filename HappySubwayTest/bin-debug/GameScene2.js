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
//游戏界面
var GameScene2 = (function (_super) {
    __extends(GameScene2, _super);
    function GameScene2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/GameScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GameScene2.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.GO, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("subway");
    };
    GameScene2.prototype.onComplete = function () {
        this.btn_qh3.touchEnabled = true;
        this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    GameScene2.prototype.onTapqiehuan = function () {
        var s1 = new EndScene2();
        //切换到最后的场景
        SceneManager.Instance.changeScene(s1);
    };
    GameScene2.prototype.GO = function () {
        this.t = new egret.Bitmap();
        this.t.texture = RES.getRes("gear");
        this.addChild(this.t);
        this.t.x = 100;
        this.t.y = 400;
        this.spr = new TweenMove();
        // this.spr.BitmapTest(this.t);
        this.t.touchEnabled = true;
        this.t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Move, this);
    };
    GameScene2.prototype.Move = function () {
        this.spr.TouchMove(this.t);
    };
    return GameScene2;
}(Scene));
__reflect(GameScene2.prototype, "GameScene2");
//# sourceMappingURL=GameScene2.js.map