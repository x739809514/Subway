// TypeScript file
//游戏界面
class GameScene2 extends Scene {
	public btn_qh3: eui.Label;
	public spr:TweenMove;
	public t:egret.Bitmap;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/GameScene.exml";
		 this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
	}
	private onAddToStage(event:egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("subway");

    }
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		
	}
	private onTapqiehuan() {
		let s1:EndScene2 =  new EndScene2();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
	}
	private GO(){
        this.t=new egret.Bitmap();
        this.t.texture=RES.getRes("gear");
        this.addChild(this.t);
		this.t.x=100;
		this.t.y=400;
        this.spr=new TweenMove();
        // this.spr.BitmapTest(this.t);
        this.t.touchEnabled=true;
        this.t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Move,this);
    }
	private Move(){
        this.spr.TouchMove(this.t);
    }
	
}