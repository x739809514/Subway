class MyNewButton extends eui.Button implements  eui.UIComponent {

	private osx: number;
    private osy: number;
	public constructor() {
		super();
		this.osx = this.scaleX;
                this.osy = this.scaleY;
                this.skinName="resource/eui_skins/MyButton.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	 protected onTouchCancle(event: egret.TouchEvent): void{
                super.onTouchCancle(event);
       
                let tween: egret.Tween = egret.Tween.get(this)
                tween.to({ scaleX: this.osx, scaleY: this.osy }, 60)
        }

         public onTouchBegin(event: egret.TouchEvent): void{
                 super.onTouchBegin(event);
       
                let tween: egret.Tween = egret.Tween.get(this)
                tween.to({ scaleX: 1.2 * this.osx, scaleY: 1.2 * this.osy }, 60)
         }

        protected buttonReleased(): void{
                super.buttonReleased();

                let tween: egret.Tween = egret.Tween.get(this)
                tween.to({ scaleX: this.osx, scaleY: this.osy }, 60)
                
        }
	
}