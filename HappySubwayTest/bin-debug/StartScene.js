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
//开始界面
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        //指定开始场景对应的皮肤文件first.exml
        _this.skinName = "resource/eui_skins/first.exml";
        return _this;
    }
    StartScene.prototype.onComplete = function () {
        this.btn_tc.touchEnabled = true;
        this.btn_qh2.touchEnabled = true;
        //添加点击事件
        this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
        this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    StartScene.prototype.onTaptc = function () {
        var tc = new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    };
    StartScene.prototype.onTapqiehuan = function () {
        var s1 = new GameScene2();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
    };
    return StartScene;
}(Scene));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map