// TypeScript file
//游戏界面
class GameScene2 extends Scene {
	public btn_qh3: eui.Label;
	public spr:TweenMove; //TweenMove的实例
	public t:egret.Bitmap;//位图
	public btn_tc:eui.Image;
	public a:string;
	public G1:number;
	public G2:number;
	public G3:number;
	public G4:number;
	public G5:number;
	public G6:number;
	public G7:number;
	public G8:number;
	public G9:number;
	public G10:number;
	public G11:number;
	public G12:number;
	public G13:number;
	public G14:number;
	public G15:number;
	public G16:number;
	public G17:number;
	public G18:number;
	
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/GameScene.exml";
		 this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
	}
	//预加载资源
	private onAddToStage(event:egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("Train");

    }
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		this.btn_tc.touchEnabled=true;
		this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc,this);		
	}
	private onTapqiehuan() {
		let s1:EndScene2 =  new EndScene2();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
	}
	private onTaptc(){
        let tc:Tanchu2=new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    }
	//实现零件位移和渐变效果
	private GO(){
		//var centerX:number=320;
		//var centerY:number=0;
		
		// var mstartAngle1=Math.floor(Math.random() * (135 - 45 + 45)) + 45;
		// var mstartAngle2=Math.floor(Math.random() * (90 - 45 + 45)) + 45;
		var s=Math.floor(Math.random() * (18 - 1 + 1)) + 1;
		this.a=s.toString();
		var time=new Date();
		var hour=time.getHours();
        var minutes=time.getMinutes();
		if((hour>=8&&hour<=10)||(hour>=16&&hour<=18)||(hour>=20&&hour<=22)){
			this.t=new egret.Bitmap();
			this.t.texture=RES.getRes(this.a);
			this.addChild(this.t);
			this.t.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
			this.t.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
			this.t.scaleX=0.1;
			this.t.scaleY=0.1;
			this.spr=new TweenMove();//TweenMove的实例
			// this.spr.BitmapTest(this.t);
			this.t.touchEnabled=true; //设置鼠标点击事件
			this.t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.Move,this);
			if(s==1){
				this.G1=parseInt(window.localStorage.getItem("g1"));
				console.log(this.G1);
				this.G1++;
				var x1:string=this.G1.toString();
				window.localStorage.setItem("g1",x1);
				console.log("1");
			}else if(s==2){
				this.G2=parseInt(window.localStorage.getItem("g2"));
				console.log(this.G2);
				this.G2++;
				var x2:string=this.G2.toString();
				window.localStorage.setItem("g2",x2);
				console.log("2");
			}else if(s==3){
				this.G3=parseInt(window.localStorage.getItem("g3"));
				console.log(this.G3);
				this.G3++;
				var x3:string=this.G3.toString();
				window.localStorage.setItem("g3",x3);
				console.log("3");
			}else if(s==4){
				this.G4=parseInt(window.localStorage.getItem("g4"));
				console.log(this.G4);
				this.G4++;
				var x4:string=this.G4.toString();
				window.localStorage.setItem("g4",x4);
				console.log("4");
			}else if(s==5){
				this.G5=parseInt(window.localStorage.getItem("g5"));
				console.log(this.G5);
				this.G5++;
				var x5:string=this.G5.toString();
				window.localStorage.setItem("g5",x5);
				console.log("5");
			}else if(s==6){
				this.G6=parseInt(window.localStorage.getItem("g6"));
				console.log(this.G6);
				this.G6++;
				var x6:string=this.G6.toString();
				window.localStorage.setItem("g6",x6);
				console.log("6");
			}else if(s==7){
				this.G7=parseInt(window.localStorage.getItem("g7"));
				console.log(this.G7);
				this.G7++;
				var x7:string=this.G7.toString();
				window.localStorage.setItem("g7",x7);
				console.log("7");
			}else if(s==8){
				this.G8=parseInt(window.localStorage.getItem("g8"));
				console.log(this.G8);
				this.G8++;
				var x8:string=this.G8.toString();
				window.localStorage.setItem("g8",x8);
				console.log("8");
			}else if(s==9){
				this.G9=parseInt(window.localStorage.getItem("g9"));
				console.log(this.G9);
				this.G9++;
				var x9:string=this.G9.toString();
				window.localStorage.setItem("g9",x9);
				console.log("9");
			}else if(s==10){
				this.G10=parseInt(window.localStorage.getItem("g10"));
				console.log(this.G10);
				this.G10++;
				var x10:string=this.G10.toString();
				window.localStorage.setItem("g10",x10);
				console.log("10");
			}else if(s==11){
				this.G11=parseInt(window.localStorage.getItem("g11"));
				console.log(this.G11);
				this.G11++;
				var x11:string=this.G11.toString();
				window.localStorage.setItem("g11",x11);
				console.log("11");
			}else if(s==12){
				this.G12=parseInt(window.localStorage.getItem("g12"));
				console.log(this.G12);
				this.G12++;
				var x12:string=this.G12.toString();
				window.localStorage.setItem("g12",x12);
				console.log("12");
			}else if(s==13){
				this.G13=parseInt(window.localStorage.getItem("g13"));
				console.log(this.G13);
				this.G13++;
				var x13:string=this.G13.toString();
				window.localStorage.setItem("g13",x13);
				console.log("13");
			}else if(s==14){
				this.G14=parseInt(window.localStorage.getItem("g14"));
				console.log(this.G14);
				this.G14++;
				var x14:string=this.G14.toString();
				window.localStorage.setItem("g14",x14);
				console.log("14");
			}else if(s==15){
				this.G15=parseInt(window.localStorage.getItem("g15"));
				console.log(this.G15);
				this.G15++;
				var x15:string=this.G15.toString();
				window.localStorage.setItem("g15",x15);
				console.log("15");
			}else if(s==16){
				this.G16=parseInt(window.localStorage.getItem("g16"));
				console.log(this.G16);
				this.G16++;
				var x16:string=this.G16.toString();
				window.localStorage.setItem("g16",x16);
				console.log("16");
			}else if(s==17){
				this.G17=parseInt(window.localStorage.getItem("g17"));
				console.log(this.G17);
				this.G17++;
				var x17:string=this.G17.toString();
				window.localStorage.setItem("g17",x17);
				console.log("17");
			}else if(s==18){
				this.G15=parseInt(window.localStorage.getItem("g18"));
				console.log(this.G18);
				this.G18++;
				var x18:string=this.G18.toString();
				window.localStorage.setItem("g18",x18);
				console.log("18");
			}
		}    
    }
	private Move(){
        this.spr.TouchMove(this.t); //调用TweenMove类中的动作函数
    }
	
	
}