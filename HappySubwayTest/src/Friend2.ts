// TypeScript file
class Friend2 extends Scene{
    private Back:eui.Button;
    constructor(){
        super();
        this.skinName="resource/eui_skins/Friend.exml";
    }
    protected onComplete(){
        this.Back.touchEnabled=true;
        this.Back.addEventListener(egret.TouchEvent.TOUCH_END,this.TapBack,this);

    }
    private TapBack(){
        SoundManager.Instance.PlaySound(SoundType.Click);
        SceneManager.Instance.closeScene();
    }
}