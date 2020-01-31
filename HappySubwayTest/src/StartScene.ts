// TypeScript file
//开始界面
class StartScene extends Scene{
    public btn_tc:eui.Label; //标签的ID
    public btn_qh2:eui.Label;

    public constructor(){
        super();
        //指定开始场景对应的皮肤文件first.exml
        this.skinName="resource/eui_skins/first.exml";
    }
    protected onComplete(){
        this.btn_tc.touchEnabled=true;
        this.btn_qh2.touchEnabled=true;
        //添加点击事件
        this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc,this);
        this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan,this);
    }
    private onTaptc(){
        let tc:Tanchu2=new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    }
    private onTapqiehuan(){
        let s1:GameScene2=new GameScene2();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
    }
}