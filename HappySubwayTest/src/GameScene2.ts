// TypeScript file
//游戏界面
class GameScene2 extends Scene {
	public btn_qh3: eui.Label;
	public spr:TweenMove; //TweenMove的实例
	public t:egret.Bitmap;//位图
	public btn_tc:eui.Image; 

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/GameScene.exml";
		 this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
	}
	//预加载资源
	private onAddToStage(event:egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("subway");

    }
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		this.btn_tc.touchEnabled=true;
		this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc,this);		
	}
	private onTapqiehuan() {
		let s1:EndScene2 =  new EndScene2();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
	}
	private onTaptc(){
        let tc:Tanchu2=new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    }
	//实现零件位移和渐变效果
	private GO(){
        this.t=new egret.Bitmap();
        this.t.texture=RES.getRes("gear");
        this.addChild(this.t);
		this.t.x=100;
		this.t.y=400;
		this.t.scaleX=0.5;
		this.t.scaleY=0.5;
        this.spr=new TweenMove();//TweenMove的实例
        // this.spr.BitmapTest(this.t);
        this.t.touchEnabled=true; //设置鼠标点击事件
        this.t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Move,this);
    }
	private Move(){
        this.spr.TouchMove(this.t); //调用TweenMove类中的动作函数
    }
	
}