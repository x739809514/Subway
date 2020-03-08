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
var Train_Station2 = (function (_super) {
    __extends(Train_Station2, _super);
    function Train_Station2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/Train_Station.exml";
        return _this;
    }
    Train_Station2.prototype.onComplete = function () {
        this.TR1.touchEnabled = true;
        this.TR1.addEventListener(egret.TouchEvent.TOUCH_END, this.onTaptc, this);
        this.TR2.touchEnabled = true;
        this.TR2.addEventListener(egret.TouchEvent.TOUCH_END, this.onTaptc2, this);
        this.Turn_Back.touchEnabled = true;
        this.Turn_Back.addEventListener(egret.TouchEvent.TOUCH_END, this.onTaptc3, this);
    };
    Train_Station2.prototype.onTaptc = function () {
        var tc = new GameScene2();
        SceneManager.Instance.changeScene(tc);
    };
    Train_Station2.prototype.onTaptc2 = function () {
        this.W = new WareHouse();
        if (this.W.Finish() == true) {
            var s1 = new ThirdScene();
            //切换到最后的场景
            SceneManager.Instance.changeScene(s1);
        }
        else {
            alert("你的第一辆地铁还没有完成哦！继续加油吧(ง •_•)ง");
        }
    };
    Train_Station2.prototype.onTaptc3 = function () {
        SoundManager.Instance.PlaySound(SoundType.Click);
        SceneManager.Instance.closeScene();
    };
    return Train_Station2;
}(Scene));
__reflect(Train_Station2.prototype, "Train_Station2");
//# sourceMappingURL=Train_Station2.js.map