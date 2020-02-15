class SnakeGO extends egret.DisplayObjectContainer {




    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createGameScene, this);
    }

    private food: Food;
    private snake: Snake;
    private stageW: number;
    private stageH: number;
    private radius = 30;
    private textCount: egret.TextField;
    private textTimer: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {

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

        this.textCount.textAlign = this.textTimer.textAlign  = egret.HorizontalAlign.CENTER;
        //this.textCount.width = this.textTimer.width =  this.stageW;
        this.textCount.textColor = this.textTimer.textColor =  0x000000;

        this.addChild(this.textCount);
        this.addChild(this.textTimer);

        this.randomFood();

        this.snake = new Snake(this.stageW * 0.5, this.stageH * 0.5, this.radius, 0x000000);
        this.addChild(this.snake);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.move, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.moveEnd, this);
    }
    private color = 0x4c8dae;

    private onEat() {
        this.removeChild(this.food);
        this.snake.afterEat(this.food.color);
        this.randomFood();
    }

    private randomFood() {
        //显示果实
        var tmpx = Math.random() * (this.stageW - this.radius * 2);
        var tmpy = Math.random() * (this.stageH - this.radius * 2);
        this.food = new Food(tmpx, tmpy, this.radius);
        this.addChild(this.food);
        //模拟被吃
        // this.food.touchEnabled = true;
        // this.food.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEat, this);
    }


    private timer: egret.Timer;
    private during: number = 50;
    private moveEvent: egret.TouchEvent;
    private head: egret.Shape;
    private count: number = 0;//记录分数
    private sum:number = 0;//倒计时判断条件
    private time:number = 60;

    private move(e: egret.TouchEvent) {
        this.snake.move(e, this.during);
    }

    private onMove(e: egret.TouchEvent) {
        this.moveEvent = e;
       if (this.timer == null) {
            this.timer = new egret.Timer(this.during,1200);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComplete,this);
            this.timer.start();
        }
    }

    private moveEnd(e: egret.TouchEvent) {
        if (this.timer != null) {
            this.timer.stop();
            this.timer = null;
        }
    }

    private onTimer(e: egret.TimerEvent) {
        this.head = this.snake.getHead();
        if (this.hit(this.head, this.food)){
            this.onEat();
            this.textCount.text = "分数:" + (++this.count);
            egret.localStorage.setItem('snake',this.count.toString());
        }
        this.snake.move(this.moveEvent, this.during);
        ++this.sum;
        if((this.sum%20)==0){      
            this.textTimer.text = "倒计时：" + (--this.time);
            if(this.time==0){
                this.removeChild(this.snake);
                let s:gameover2=new gameover2();
                SceneManager.Instance.pushScene(s);
            }
        }
    }

     private onTimerComplete(e: egret.TimerEvent): void{
        this.textTimer.text="游戏结束";
    }

    private hit(a, b) {
        return (new egret.Rectangle(a.x + this.snake.x, a.y + this.snake.y, a.width, a.height))
            .intersects(new egret.Rectangle(b.x, b.y, b.width, b.height));
    }
}
