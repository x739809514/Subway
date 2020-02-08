// TypeScript file
  
class Tanchu2 extends Scene{
	public Back:eui.Button;
	public pBar:eui.ProgressBar;
	public isFirst:any;
	public a:string;
	public s:number;
	
	

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
		this.Back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapClose,this);
		//egret.localStorage.clear();
		 this.everyDayLogin();
		
	}
	private onTapClose(){
		
		SceneManager.Instance.closeScene();
	}
	//*******首登奖励********* */
    //*********************** */
    public setUserSetting(key, value) {
        if (value != null) {
            value = value.toString();
            value = encodeURI(value);
            
        }
        egret.localStorage.setItem(key, value);
    }

    public getUserSetting(key, value?): any {
        var val = egret.localStorage.getItem(key);
        if (val == null || '' == val) {
            if (null != value) {
                val = value;
            }
        } else {
            
            val = decodeURI(val);
            if (val == "true") { return true; }
            if (val == "false") { return false; }
        }
        return val;
    }
    private oneDayFunction(saveName): boolean {
        let lastDay = this.getUserSetting(saveName, "")
        let today = new Date().getDate();
        let isSameDay = lastDay == today;
        if (!isSameDay) {
            this.setUserSetting(saveName, today)
            return true;
        }
        return false;
    }

    /**
 　　* 每日登陆领取设置
 　　*/
    private everyDayLogin() {
        this.isFirst = this.oneDayFunction("isFirst");
        egret.log("是否是首次登陆？？？？" + this.isFirst)
        if (this.isFirst) {    
         //是首次登陆
		 this.initProgressBar();
		 
        }else{
			this.saveProgressBar();
		}
    }
	private initProgressBar():void{
		this.pBar = new eui.ProgressBar();
		this.pBar.maximum = 7;//设置进度条的最大值
		this.pBar.minimum = 0;//设置进度条的最小值
		this.pBar.width = 235.15;
		this.pBar.height = 21.52;
		this.pBar.x=193.82;
		this.pBar.y=177.5;
		this.addChild(this.pBar);
		this.pBar.value=parseInt(egret.localStorage.getItem("d1"));
		this.pBar.value+=1;//设置进度条的初始值
		var x1:string=this.pBar.value.toString();
		egret.localStorage.setItem("d1",x1);
		if(this.pBar.value>7){this.pBar.value=0;}
		
	}
	private saveProgressBar():void{
		this.pBar = new eui.ProgressBar();
		this.pBar.maximum = 7;//设置进度条的最大值
		this.pBar.minimum = 0;//设置进度条的最小值
		this.pBar.width = 235.15;
		this.pBar.height = 21.52;
		this.pBar.x=193.82;
		this.pBar.y=177.5;
		this.addChild(this.pBar);
		var y:number=parseInt(egret.localStorage.getItem("d1"));
		this.pBar.value=y;//设置进度条的初始值
	}

	
	
}