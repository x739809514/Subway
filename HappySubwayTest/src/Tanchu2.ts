// TypeScript file
  
class Tanchu2 extends Scene{
	public Back:eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/TanChu.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onComplete,this);
	}

	public spr:egret.Sprite;

	protected onComplete() {
		this.spr=new egret.Sprite();
		this.addChild(this.spr);
		this.spr.x=0;
		this.spr.y=0;
		this.spr.width=640;
		this.spr.height=1136;

		this.Back.touchEnabled=true;
		this.Back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan,this);		
		
	}

	private onTapqiehuan(){
		let s1:GameScene2=new GameScene2();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
	}

	
}