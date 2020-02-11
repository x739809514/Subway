// TypeScript file
class shelf extends Scene{
    public W:WareHouse;
    public duihuan:eui.Button;
    public text:egret.TextField;
    public TC:eui.Button;
    public constructor(){
        super();
        this.skinName="resource/eui_skins/GongYi.exml";
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.Duihuanquan,this);
    }
    public onComplete(){
        this.duihuan.touchEnabled=true;
        this.duihuan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.TapDuiHuan,this);
        this.TC.touchEnabled=true;
        this.TC.addEventListener(egret.TouchEvent.TOUCH_TAP,this.TUICHU,this);
    }
    private Duihuanquan(){
        let G1:string;
        this.W=new WareHouse();
        if(this.W.Finish()==true){
		if(egret.localStorage.getItem("B1")){
				G1=egret.localStorage.getItem("B1");
			}else{
				G1="0";
			}
			console.log(G1);
			console.log("B1");
			var x1:string=(parseInt(G1)+1).toString();
			egret.localStorage.setItem("B1",x1);
            this.text=new egret.TextField();
            this.text.text=x1;
            this.text.x=477.78;
            this.text.y=280.91;
            this.text.textColor=0x000000;
            this.text.size=70;
            this.addChild(this.text);
        }else{
            if(egret.localStorage.getItem("B1")){
				G1=egret.localStorage.getItem("B1");
			}else{
				G1="0";
			}
            this.text=new egret.TextField();
            this.text.text=G1;
            this.text.x=477.78;
            this.text.y=280.91;
            this.text.textColor=0x000000;
            this.text.size=70;
            this.addChild(this.text);
        }
    }
    private TapDuiHuan(){
        let data=parseInt(egret.localStorage.getItem("B1"));
        if(data>=1){
            let x2:string=(data-1).toString();
			egret.localStorage.setItem("B1",x2);
            alert("兑换成功！");
        }else{
            alert("您还没有兑换券哦！");
        }
    }
    private TUICHU(){
        SceneManager.Instance.closeScene();
    
    }
}