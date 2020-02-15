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
var Food = (function (_super) {
    __extends(Food, _super);
    /**
    * @param x 横坐标
    * @param y 纵坐标
    * @param r 半径
    */
    function Food(x, y, r) {
        var _this = _super.call(this) || this;
        _this.init(x, y, r);
        return _this;
    }
    /**
     * 初始化
     *
     * 1.绘制果实
     */
    Food.prototype.init = function (x, y, r) {
        //获取随机颜色
        this.color = this.randomColor();
        this.food = new egret.Shape();
        this.food.graphics.beginFill(this.color);
        this.food.graphics.drawCircle(0, 0, r);
        this.food.graphics.endFill();
        this.food.x = r;
        this.food.y = r;
        //位置
        this.x = x;
        this.y = y;
        this.addChild(this.food);
    };
    /**
     * 获取随机的颜色
     */
    Food.prototype.randomColor = function () {
        // return Food.colorList[Math.round(Math.random() * Food.colorList.length)];
        return parseInt("0x" + ("000000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6));
    };
    /**
     * 被吃
     */
    Food.prototype.onEat = function () {
        this.parent.removeChild(this);
    };
    /**
     * 食物颜色
     */
    Food.colorList = [0x70f3ff, 0xff461f, 0x00bc12, 0x21a675, 0x4c221b, 0xbf242a, 0x161823, 0xffa400,];
    return Food;
}(egret.Sprite));
__reflect(Food.prototype, "Food");
//# sourceMappingURL=food.js.map