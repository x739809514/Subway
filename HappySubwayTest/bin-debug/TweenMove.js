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
var TweenMove = (function (_super) {
    __extends(TweenMove, _super);
    function TweenMove() {
        return _super.call(this) || this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE,this.BitmapTest,this);
    }
    TweenMove.prototype.TouchMove = function (s) {
        var tw2 = egret.Tween.get(s);
        tw2.to({ x: 250, y: 800 }, 1000).call(function () {
            s.alpha = 0;
        });
    };
    return TweenMove;
}(egret.DisplayObjectContainer));
__reflect(TweenMove.prototype, "TweenMove");
//# sourceMappingURL=TweenMove.js.map