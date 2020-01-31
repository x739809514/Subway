
class LoadingUI extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onaddToStage,this);
    }
    private onaddToStage(event:egret.Event):void{
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.createView,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("subway")
    }

    private textField;
    private createView():void {
        var sky=new egret.Bitmap();
        this.addChild(sky);
        let stageW = 640;
        let stageH = 1136;
        sky.width = stageW;
        sky.height = stageH;
        // let stageX = this.stage.stageWidth, stageY = this.stage.stageHeight;
        var spr:egret.Sprite=new egret.Sprite();
        this.addChild(spr);
        this.textField = new egret.TextField();
        spr.addChild(this.textField);
        spr.width = 480;
        spr.height = 100;
        spr.x=40;
        spr.y=350;
        this.textField.x=spr.x;
        this.textField.y=spr.y;
        this.textField.textAlign = "center";
        var Bar:egret.Shape=new egret.Shape();
        Bar.graphics.beginFill(0xffffff);
        Bar.graphics.drawRoundRect(0,0,480,30,20);
        Bar.graphics.endFill();
        spr.addChild(Bar);
        Bar.x=spr.x;
        Bar.y=spr.y;
        var current:egret.Shape=new egret.Shape();
        current.graphics.beginFill(0xff0000);
        current.graphics.drawRoundRect(0,0,this._linpec,30,20);
        current.graphics.endFill();
        spr.addChild(current);
        current.x=spr.x;
        current.y=spr.y;
        this.textField.text=""+this._pec+"%";
    }
    private _distance:number=380;
    private _linpec;
    private _pec
    public setProgress(cur:number,total:number):void{
        this._distance=cur/total*350;
        this._linpec=cur/total*280;
        this._pec=Math.round((cur/total)*100)+"%";
        this.createView();
        if(cur/total==1){
            
        }
    }

}
