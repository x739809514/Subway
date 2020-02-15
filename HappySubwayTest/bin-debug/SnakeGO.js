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
var SnakeGO = (function (_super) {
    __extends(SnakeGO, _super);
    function SnakeGO() {
        var _this = _super.call(this) || this;
        _this.radius = 30;
        _this.color = 0x4c8dae;
        _this.during = 50;
        _this.count = 0; //记录分数
        _this.sum = 0; //倒计时判断条件
        _this.time = 60;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createGameScene, _this);
        return _this;
    }
    /**
     * 创建游戏场景
     * Create a game scene
     */
    SnakeGO.prototype.createGameScene = function () {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        //白色背景
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0, 0, this.stageW, this.stageH);
        bg.graphics.endFill();
        this.addChild(bg);
        this.textCount = new egret.TextField();
        this.textCount.textColor = 0xffffff;
        this.textCount.x = 150;
        this.textCount.y = 100;
        this.textCount.text = "分数：0";
        this.textTimer = new egret.TextField();
        this.textTimer.textColor = 0xffffff;
        this.textTimer.x = 400;
        this.textTimer.y = 100;
        this.textTimer.text = "倒计时: 60";
        this.textCount.textAlign = this.textTimer.textAlign = egret.HorizontalAlign.CENTER;
        //this.textCount.width = this.textTimer.width =  this.stageW;
        this.textCount.textColor = this.textTimer.textColor = 0x000000;
        this.addChild(this.textCount);
        this.addChild(this.textTimer);
        this.randomFood();
        this.snake = new Snake(this.stageW * 0.5, this.stageH * 0.5, this.radius, 0x000000);
        this.addChild(this.snake);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.move, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.moveEnd, this);
    };
    SnakeGO.prototype.onEat = function () {
        this.removeChild(this.food);
        this.snake.afterEat(this.food.color);
        this.randomFood();
    };
    SnakeGO.prototype.randomFood = function () {
        //显示果实
        var tmpx = Math.random() * (this.stageW - this.radius * 2);
        var tmpy = Math.random() * (this.stageH - this.radius * 2);
        this.food = new Food(tmpx, tmpy, this.radius);
        this.addChild(this.food);
        //模拟被吃
        // this.food.touchEnabled = true;
        // this.food.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEat, this);
    };
    SnakeGO.prototype.move = function (e) {
        this.snake.move(e, this.during);
    };
    SnakeGO.prototype.onMove = function (e) {
        this.moveEvent = e;
        if (this.timer == null) {
            this.timer = new egret.Timer(this.during, 1200);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
            this.timer.start();
        }
    };
    SnakeGO.prototype.moveEnd = function (e) {
        if (this.timer != null) {
            this.timer.stop();
            this.timer = null;
        }
    };
    SnakeGO.prototype.onTimer = function (e) {
        this.head = this.snake.getHead();
        if (this.hit(this.head, this.food)) {
            this.onEat();
            this.textCount.text = "分数:" + (++this.count);
            egret.localStorage.setItem('snake', this.count.toString());
        }
        this.snake.move(this.moveEvent, this.during);
        ++this.sum;
        if ((this.sum % 20) == 0) {
            this.textTimer.text = "倒计时：" + (--this.time);
            if (this.time == 0) {
                this.removeChild(this.snake);
                var s = new gameover2();
                SceneManager.Instance.pushScene(s);
            }
        }
    };
    SnakeGO.prototype.onTimerComplete = function (e) {
        this.textTimer.text = "游戏结束";
    };
    SnakeGO.prototype.hit = function (a, b) {
        return (new egret.Rectangle(a.x + this.snake.x, a.y + this.snake.y, a.width, a.height))
            .intersects(new egret.Rectangle(b.x, b.y, b.width, b.height));
    };
    return SnakeGO;
}(egret.DisplayObjectContainer));
__reflect(SnakeGO.prototype, "SnakeGO");
//# sourceMappingURL=SnakeGO.js.map