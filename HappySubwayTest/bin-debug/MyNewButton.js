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
var MyNewButton = (function (_super) {
    __extends(MyNewButton, _super);
    function MyNewButton() {
        var _this = _super.call(this) || this;
        _this.osx = _this.scaleX;
        _this.osy = _this.scaleY;
        _this.skinName = "resource/eui_skins/MyButton.exml";
        return _this;
    }
    MyNewButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MyNewButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MyNewButton.prototype.onTouchCancle = function (event) {
        _super.prototype.onTouchCancle.call(this, event);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: this.osx, scaleY: this.osy }, 60);
    };
    MyNewButton.prototype.onTouchBegin = function (event) {
        _super.prototype.onTouchBegin.call(this, event);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: 1.2 * this.osx, scaleY: 1.2 * this.osy }, 60);
    };
    MyNewButton.prototype.buttonReleased = function () {
        _super.prototype.buttonReleased.call(this);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: this.osx, scaleY: this.osy }, 60);
    };
    return MyNewButton;
}(eui.Button));
__reflect(MyNewButton.prototype, "MyNewButton", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MyNewButton.js.map