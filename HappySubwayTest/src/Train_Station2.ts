// TypeScript file
class Train_Station2 extends Scene{
    public TR1:eui.Button;
    public TR2:eui.Button;
    public W:WareHouse;
    public Turn_Back:eui.Button;
    public constructor(){
        super();
        this.skinName="resource/eui_skins/Train_Station.exml";
    }
    public onComplete(){
        this.TR1.touchEnabled=true;
        this.TR1.addEventListener(egret.TouchEvent.TOUCH_END,this.onTaptc,this);
        this.TR2.touchEnabled=true;
        this.TR2.addEventListener(egret.TouchEvent.TOUCH_END,this.onTaptc2,this);
        this.Turn_Back.touchEnabled=true;
        this.Turn_Back.addEventListener(egret.TouchEvent.TOUCH_END,this.onTaptc3,this)
    }
    private onTaptc(){
        let tc:GameScene2=new GameScene2();
        SceneManager.Instance.changeScene(tc);
    }
    private onTaptc2(){
        
		this.W=new WareHouse();
		if(this.W.Finish()==true){ 
		let s1:ThirdScene = new ThirdScene();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
		}else{
            alert("你的第一辆地铁还没有完成哦！继续加油吧(ง •_•)ง")
		}
	
    }
    private onTaptc3(){
        SoundManager.Instance.PlaySound(SoundType.Click);
        SceneManager.Instance.closeScene();
    }
}