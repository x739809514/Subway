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
//动作类，存放要执行的动作，在主类中实例化
var TweenMove = (function (_super) {
    __extends(TweenMove, _super);
    function TweenMove() {
        return _super.call(this) || this;
    }
    //Tween缓动动画
    TweenMove.prototype.TouchMove = function (s) {
        var tw2 = egret.Tween.get(s);
        tw2.to({ x: 250, y: 800, alpha: 0 }, 700); //移动到坐标（250，800）的位置，透明度渐变为0，控制时长700ms
    };
    return TweenMove;
}(egret.DisplayObjectContainer));
__reflect(TweenMove.prototype, "TweenMove");
//# sourceMappingURL=TweenMove.js.map