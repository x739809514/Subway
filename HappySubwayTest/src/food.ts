class Food extends egret.Sprite {

    /**
     * 食物颜色
     */
    private static colorList: number[] =
    [0x70f3ff, 0xff461f, 0x00bc12, 0x21a675, 0x4c221b, 0xbf242a, 0x161823, 0xffa400,];

    /**
    * @param x 横坐标
    * @param y 纵坐标
    * @param r 半径
    */
    public constructor(x: number, y: number, r: number) {
        super();
        this.init(x, y, r);
    }

    private food: egret.Bitmap;
    public color: number;
        private bitmap(){
        this.food=new egret.Bitmap();
        this.food.texture=RES.getRes("gear");
        this.addChild(this.food);
    }
    /**
     * 初始化
     * 
     * 1.绘制果实
     */
    private init(x: number, y: number, r: number): void {

        //获取随机颜色
        this.color = this.randomColor();

        this.bitmap();

        this.food.x = r;
        this.food.y = r;

        //位置
        this.x = x;
        this.y = y;

        this.addChild(this.food);
    }

    /**
     * 获取随机的颜色
     */
    private randomColor(): number {
        // return Food.colorList[Math.round(Math.random() * Food.colorList.length)];
        return parseInt("0x" + ("000000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6));
    }

    /**
     * 被吃
     */
    public onEat() {
        this.parent.removeChild(this);
    }
}