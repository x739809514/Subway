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
var Friend2 = (function (_super) {
    __extends(Friend2, _super);
    function Friend2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/Friend.exml";
        return _this;
    }
    Friend2.prototype.onComplete = function () {
        this.Back.touchEnabled = true;
        this.Back.addEventListener(egret.TouchEvent.TOUCH_END, this.TapBack, this);
    };
    Friend2.prototype.TapBack = function () {
        SoundManager.Instance.PlaySound(SoundType.Click);
        SceneManager.Instance.closeScene();
    };
    return Friend2;
}(Scene));
__reflect(Friend2.prototype, "Friend2");
//# sourceMappingURL=Friend2.js.map