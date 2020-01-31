// TypeScript file
//开始界面
class StartScene extends Scene{
    
    public btn_qh2:eui.Label; //标签的ID

    public constructor(){
        super();
        //指定开始场景对应的皮肤文件first.exml
        this.skinName="resource/eui_skins/first.exml";
    }
    protected onComplete(){
        
        this.btn_qh2.touchEnabled=true;
        //添加点击事件
        
        this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan,this);
    }
    
    private onTapqiehuan(){
        let s1:GameScene2=new GameScene2();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
    }
}