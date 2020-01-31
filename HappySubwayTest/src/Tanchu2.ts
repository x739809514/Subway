// TypeScript file
  
class Tanchu2 extends Scene{
	public btn_close:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/TanChu.exml";
	}
	protected onComplete() {
		this.btn_close.touchEnabled = true;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapclose, this);
	}
	private onTapclose() {
		SceneManager.Instance.closeScene();
	}
}