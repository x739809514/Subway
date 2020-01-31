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
//结束界面
var EndScene2 = (function (_super) {
    __extends(EndScene2, _super);
    function EndScene2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/EndScene.exml";
        return _this;
    }
    EndScene2.prototype.onComplete = function () {
        this.btn_fh.touchEnabled = true;
        this.btn_fh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    EndScene2.prototype.onTapqiehuan = function () {
        var s1 = new StartScene();
        //切换回最开始的场景
        SceneManager.Instance.changeScene(s1);
    };
    return EndScene2;
}(Scene));
__reflect(EndScene2.prototype, "EndScene2");
//# sourceMappingURL=EndScene2.js.map