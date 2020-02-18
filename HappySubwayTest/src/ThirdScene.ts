// TypeScript file
//结束界面
class ThirdScene extends Scene {
	//public btn_fh:eui.Label;
	//public Left:eui.Image;
	public btn_qh3:eui.Image;
	public spr:TweenMove; //TweenMove的实例
	public t:egret.Bitmap;//位图
	public t2:egret.Bitmap;//位图
	public t3:egret.Bitmap;
	public btn_tc:eui.Image;
	public house_2:eui.Image;
	public a:string;
	private s:number;
	public Game2:eui.Image;
	public Gsub:SnakeGO;
	public TanC:Tanchu2=new Tanchu2();
	public NUMber:number;//函数执行次数
	public NUMber1:number;//函数执行次数
	public NUMber2:number;//函数执行次数
	private G1:string;
	private G2:string;
	private G3:string;
	private G4:string;
	private G5:string;
	private G6:string;
	private G7:string;
	private G8:string;
	private G9:string;
	private G10:string;
	private G11:string;
	private G12:string;
	private G13:string;
	private G14:string;
	private G15:string;
	private G16:string;
	private G17:string;
	private G18:string;
	private G19:string;
	private G20:string;
	private G21:string;
	private G22:string;
	private G23:string;
	private G24:string;
	private G25:string;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/ThirdScene.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	//预加载资源
	private onAddToStage(event:egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO2,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO3,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("TrainGear2");
		
    }
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		this.btn_tc.touchEnabled=true;
		this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc,this);
		this.house_2.touchEnabled=true;
		this.house_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc2,this)		
		this.Game2.touchEnabled=true;
		this.Game2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GameGO,this);
	}
	private GameGO(){
		this.Gsub=new SnakeGO();
		this.addChild(this.Gsub)
	}
	private onTapqiehuan() {
		let s1:ThirdScene = new ThirdScene();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
	}
	private onTaptc(){
        let tc:Tanchu2=new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    }
	private onTaptc2(){
        let tc2:WareHouse_2=new WareHouse_2();
        SceneManager.Instance.pushScene(tc2);
    }
	// private onTapClose() {
	// 	let s1:GameScene2=new GameScene2();
    //     SceneManager.Instance.changeScene(s1);
	// }
	//实现零件位移和渐变效果
	public GO(){
		//egret.localStorage.clear();
		if(this.TanC.ProBar()==true){
				egret.localStorage.removeItem("NUMBER");
			}
		
		let time=new Date();
		let hour=time.getHours();
        let minutes=time.getMinutes();
		if(egret.localStorage.getItem("NUMBER")){
				this.NUMber=parseInt(egret.localStorage.getItem("NUMBER"));
			}else{
				this.NUMber=0;
			}		
		if((hour>=8&&hour<13)||(hour>=13&&hour<18)||(hour>=20&&hour<22)){ //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
			if(this.NUMber==0){
			this.s=Math.round(Math.random() * (45 - 21)) + 21;			//创建45-21之间的随机数字
			this.a=this.s.toString();
			this.t=new egret.Bitmap();									//创建零件位图	
			this.t.texture=RES.getRes(this.a);							//根据数字找到图片的编号
			this.addChild(this.t);
			this.t.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
			this.t.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
			this.t.scaleX=0.3;
			this.t.scaleY=0.3;
			this.spr=new TweenMove();//TweenMove的实例
			// this.spr.BitmapTest(this.t);
			this.t.touchEnabled=true; //设置鼠标点击事件
			this.t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Move,this);
		} 	
		}	 
    }

	public GO2(){
		//egret.localStorage.clear();
		if(this.TanC.ProBar()==true){
				egret.localStorage.removeItem("NUMber1");
			}
		if(egret.localStorage.getItem("NUMBER1")){
				this.NUMber1=parseInt(egret.localStorage.getItem("NUMBER1"));
			}else{
				this.NUMber1=0;
			}	
			
		if((parseInt(egret.localStorage.getItem("d1"))==7)||(this.data()==true)){
			if(this.NUMber1==0){
			this.s=Math.floor(Math.random() * (45 - 21 + 21)) + 21;			//创建1-18之间的随机数字
			this.a=this.s.toString(); //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
			this.t2=new egret.Bitmap();									//创建零件位图	
			this.t2.texture=RES.getRes(this.a);							//根据数字找到图片的编号
			this.addChild(this.t2);
			this.t2.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
			this.t2.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
			this.t2.scaleX=0.3;
			this.t2.scaleY=0.3;
			this.spr=new TweenMove();//TweenMove的实例
			// this.spr.BitmapTest(this.t);
			this.t2.touchEnabled=true; //设置鼠标点击事件
			this.t2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Move2,this);
		}
		} 
	}
	public GO3(){
		//egret.localStorage.clear();
		if(this.TanC.ProBar()==true){
				egret.localStorage.removeItem("NUMBER2");
			}
		if(egret.localStorage.getItem("NUMBER2")){
				this.NUMber2=parseInt(egret.localStorage.getItem("NUMBER2"));
			}else{
				this.NUMber2=0;
			}
		if(this.data2()==true){ //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
			if(this.NUMber2==0){
			this.s=Math.floor(Math.random() * (18 - 1 + 1)) + 1;			//创建1-18之间的随机数字
			this.a=this.s.toString();
			this.t3=new egret.Bitmap();									//创建零件位图	
			this.t3.texture=RES.getRes(this.a);							//根据数字找到图片的编号
			this.addChild(this.t3);
			this.t3.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
			this.t3.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
			this.t3.scaleX=0.2;
			this.t3.scaleY=0.2;
			this.spr=new TweenMove();//TweenMove的实例
			// this.spr.BitmapTest(this.t);
			this.t3.touchEnabled=true; //设置鼠标点击事件
			this.t3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Move3,this);
		}
		} 
	}
	public data():boolean {
        var data2 = JSON.parse(<string>egret.localStorage.getItem('json'));
        if(data2=="南湖家园"){
           return true;
        }else {
            return false;
        }
    }
	public data2():boolean {	
        var data3 = JSON.parse(<string>egret.localStorage.getItem('json2'));
		console.log(data3);
		if(parseInt(data3)>=10){
		   return true;
        }else {
            return false;
        }
    }
	public Move(event:egret.TouchEvent){
		this.spr.TouchMove(this.t); //调用TweenMove类中的动作函数
		let N:number=parseInt(egret.localStorage.getItem("NUMBER"));
		N=N+1;
		var M=N.toString();
		egret.localStorage.setItem("NUMBER",M);	
		if(this.s==21){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("t1")){
				this.G1=egret.localStorage.getItem("t1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("t1");
			let x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("t1",x1);
			
		}else if(this.s==22){
			if(egret.localStorage.getItem("t2")){
				this.G2=egret.localStorage.getItem("t2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("t2");
			let x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("t2",x2);
		}else if(this.s==23){
			if(egret.localStorage.getItem("t3")){
				this.G3=egret.localStorage.getItem("t3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("t3");
			let x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("t3",x3);
		}else if(this.s==24){
			if(egret.localStorage.getItem("t4")){
				this.G4=egret.localStorage.getItem("t4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("t4");
			let x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("t4",x4);
		}else if(this.s==25){
			if(egret.localStorage.getItem("t5")){
				this.G5=egret.localStorage.getItem("t5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("t5");
			let x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("t5",x5);
		}else if(this.s==26){
			if(egret.localStorage.getItem("t6")){
				this.G6=egret.localStorage.getItem("t6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("t6");
			let x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("t6",x6);
		}else if(this.s==27){
			if(egret.localStorage.getItem("t7")){
				this.G7=egret.localStorage.getItem("t7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("t7");
			let x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("t7",x7);
		}else if(this.s==28){
			if(egret.localStorage.getItem("t8")){
				this.G8=egret.localStorage.getItem("t8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("t8");
			let x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("t8",x8);
		}else if(this.s==29){
			if(egret.localStorage.getItem("t9")){
				this.G9=egret.localStorage.getItem("t9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("t9");
			let x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("t9",x9);
		}else if(this.s==30){
			if(egret.localStorage.getItem("t10")){
				this.G10=egret.localStorage.getItem("t10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("t10");
			let x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("t10",x10);
		}else if(this.s==31){
			if(egret.localStorage.getItem("t11")){
				this.G11=egret.localStorage.getItem("t11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("t11");
			let x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("t11",x11);
		}else if(this.s==32){
			if(egret.localStorage.getItem("t12")){
				this.G12=egret.localStorage.getItem("t12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("t12");
			let x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("t12",x12);
		}else if(this.s==33){
			if(egret.localStorage.getItem("t13")){
				this.G13=egret.localStorage.getItem("t13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("t13");
			let x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("t13",x13);
		}else if(this.s==34){
			if(egret.localStorage.getItem("t14")){
				this.G14=egret.localStorage.getItem("t14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("t14");
			let x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("t14",x14);
		}else if(this.s==35){
			if(egret.localStorage.getItem("t15")){
				this.G15=egret.localStorage.getItem("t15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("t15");
			let x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("t15",x15);
		}else if(this.s==36){
			if(egret.localStorage.getItem("t16")){
				this.G16=egret.localStorage.getItem("t16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("t16");
			let x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("t16",x16);
		}else if(this.s==37){
			if(egret.localStorage.getItem("t17")){
				this.G17=egret.localStorage.getItem("t17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("t17");
			let x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("t17",x17);
		}else if(this.s==38){
			if(egret.localStorage.getItem("t18")){
				this.G18=egret.localStorage.getItem("t18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("t18");
			let x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("t18",x18);
		}
		else if(this.s==39){
			if(egret.localStorage.getItem("t19")){
				this.G19=egret.localStorage.getItem("t19");
			}else{
				this.G19="0";
			}
			console.log(this.G19);
			console.log("t19");
			let x19:string=(parseInt(this.G19)+1).toString();
			egret.localStorage.setItem("t19",x19);
		}
		else if(this.s==40){
			if(egret.localStorage.getItem("t20")){
				this.G20=egret.localStorage.getItem("t20");
			}else{
				this.G20="0";
			}
			console.log(this.G20);
			console.log("t20");
			let x20:string=(parseInt(this.G20)+1).toString();
			egret.localStorage.setItem("t20",x20);
		}
		else if(this.s==41){
			if(egret.localStorage.getItem("t21")){
				this.G21=egret.localStorage.getItem("t21");
			}else{
				this.G21="0";
			}
			console.log(this.G21);
			console.log("t21");
			let x21:string=(parseInt(this.G21)+1).toString();
			egret.localStorage.setItem("t21",x21);
		}
		else if(this.s==42){
			if(egret.localStorage.getItem("t22")){
				this.G22=egret.localStorage.getItem("t22");
			}else{
				this.G22="0";
			}
			console.log(this.G22);
			console.log("t22");
			let x22:string=(parseInt(this.G22)+1).toString();
			egret.localStorage.setItem("t22",x22);
		}
		else if(this.s==43){
			if(egret.localStorage.getItem("t23")){
				this.G23=egret.localStorage.getItem("t23");
			}else{
				this.G23="0";
			}
			console.log(this.G23);
			console.log("t23");
			let x23:string=(parseInt(this.G23)+1).toString();
			egret.localStorage.setItem("t23",x23);
		}else if(this.s==44){
			if(egret.localStorage.getItem("t24")){
				this.G24=egret.localStorage.getItem("t24");
			}else{
				this.G24="0";
			}
			console.log(this.G24);
			console.log("t24");
			let x24:string=(parseInt(this.G24)+1).toString();
			egret.localStorage.setItem("t24",x24);
		}else if(this.s==45){
			if(egret.localStorage.getItem("t25")){
				this.G25=egret.localStorage.getItem("t25");
			}else{
				this.G25="0";
			}
			console.log(this.G25);
			console.log("t25");
			let x25:string=(parseInt(this.G25)+1).toString();
			egret.localStorage.setItem("t25",x25);
		}
		
        
    }	
	public Move2(event:egret.TouchEvent){
		this.spr.TouchMove(this.t2); //调用TweenMove类中的动作函数
		let N2:number=parseInt(egret.localStorage.getItem("NUMBER1"));
		N2=N2+1;
		var M2=N2.toString();
		egret.localStorage.setItem("NUMBER1",M2);
		//egret.localStorage.clear();	
		if(this.s==21){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("t1")){
				this.G1=egret.localStorage.getItem("t1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("t1");
			let x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("t1",x1);
			
		}else if(this.s==22){
			if(egret.localStorage.getItem("t2")){
				this.G2=egret.localStorage.getItem("t2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("t2");
			let x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("t2",x2);
		}else if(this.s==23){
			if(egret.localStorage.getItem("t3")){
				this.G3=egret.localStorage.getItem("t3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("t3");
			let x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("t3",x3);
		}else if(this.s==24){
			if(egret.localStorage.getItem("t4")){
				this.G4=egret.localStorage.getItem("t4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("t4");
			let x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("t4",x4);
		}else if(this.s==25){
			if(egret.localStorage.getItem("t5")){
				this.G5=egret.localStorage.getItem("t5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("t5");
			let x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("t5",x5);
		}else if(this.s==26){
			if(egret.localStorage.getItem("t6")){
				this.G6=egret.localStorage.getItem("t6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("t6");
			let x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("t6",x6);
		}else if(this.s==27){
			if(egret.localStorage.getItem("t7")){
				this.G7=egret.localStorage.getItem("t7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("t7");
			let x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("t7",x7);
		}else if(this.s==28){
			if(egret.localStorage.getItem("t8")){
				this.G8=egret.localStorage.getItem("t8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("t8");
			let x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("t8",x8);
		}else if(this.s==29){
			if(egret.localStorage.getItem("t9")){
				this.G9=egret.localStorage.getItem("t9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("t9");
			let x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("t9",x9);
		}else if(this.s==30){
			if(egret.localStorage.getItem("t10")){
				this.G10=egret.localStorage.getItem("t10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("t10");
			let x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("t10",x10);
		}else if(this.s==31){
			if(egret.localStorage.getItem("t11")){
				this.G11=egret.localStorage.getItem("t11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("t11");
			let x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("t11",x11);
		}else if(this.s==32){
			if(egret.localStorage.getItem("t12")){
				this.G12=egret.localStorage.getItem("t12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("t12");
			let x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("t12",x12);
		}else if(this.s==33){
			if(egret.localStorage.getItem("t13")){
				this.G13=egret.localStorage.getItem("t13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("t13");
			let x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("t13",x13);
		}else if(this.s==34){
			if(egret.localStorage.getItem("t14")){
				this.G14=egret.localStorage.getItem("t14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("t14");
			let x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("t14",x14);
		}else if(this.s==35){
			if(egret.localStorage.getItem("t15")){
				this.G15=egret.localStorage.getItem("t15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("t15");
			let x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("t15",x15);
		}else if(this.s==36){
			if(egret.localStorage.getItem("t16")){
				this.G16=egret.localStorage.getItem("t16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("t16");
			let x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("t16",x16);
		}else if(this.s==37){
			if(egret.localStorage.getItem("t17")){
				this.G17=egret.localStorage.getItem("t17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("t17");
			let x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("t17",x17);
		}else if(this.s==38){
			if(egret.localStorage.getItem("t18")){
				this.G18=egret.localStorage.getItem("t18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("t18");
			let x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("t18",x18);
		}
		else if(this.s==39){
			if(egret.localStorage.getItem("t19")){
				this.G19=egret.localStorage.getItem("t19");
			}else{
				this.G19="0";
			}
			console.log(this.G19);
			console.log("t19");
			let x19:string=(parseInt(this.G19)+1).toString();
			egret.localStorage.setItem("t19",x19);
		}
		else if(this.s==40){
			if(egret.localStorage.getItem("t20")){
				this.G20=egret.localStorage.getItem("t20");
			}else{
				this.G20="0";
			}
			console.log(this.G20);
			console.log("t20");
			let x20:string=(parseInt(this.G20)+1).toString();
			egret.localStorage.setItem("t20",x20);
		}
		else if(this.s==41){
			if(egret.localStorage.getItem("t21")){
				this.G21=egret.localStorage.getItem("t21");
			}else{
				this.G21="0";
			}
			console.log(this.G21);
			console.log("t21");
			let x21:string=(parseInt(this.G21)+1).toString();
			egret.localStorage.setItem("t21",x21);
		}
		else if(this.s==42){
			if(egret.localStorage.getItem("t22")){
				this.G22=egret.localStorage.getItem("t22");
			}else{
				this.G22="0";
			}
			console.log(this.G22);
			console.log("t22");
			let x22:string=(parseInt(this.G22)+1).toString();
			egret.localStorage.setItem("t22",x22);
		}
		else if(this.s==43){
			if(egret.localStorage.getItem("t23")){
				this.G23=egret.localStorage.getItem("t23");
			}else{
				this.G23="0";
			}
			console.log(this.G23);
			console.log("t23");
			let x23:string=(parseInt(this.G23)+1).toString();
			egret.localStorage.setItem("t23",x23);
		}else if(this.s==44){
			if(egret.localStorage.getItem("t24")){
				this.G24=egret.localStorage.getItem("t24");
			}else{
				this.G24="0";
			}
			console.log(this.G24);
			console.log("t24");
			let x24:string=(parseInt(this.G24)+1).toString();
			egret.localStorage.setItem("t24",x24);
		}else if(this.s==45){
			if(egret.localStorage.getItem("t25")){
				this.G25=egret.localStorage.getItem("t25");
			}else{
				this.G25="0";
			}
			console.log(this.G25);
			console.log("t25");
			let x25:string=(parseInt(this.G25)+1).toString();
			egret.localStorage.setItem("t25",x25);
		}
        
    }
	public Move3(event:egret.TouchEvent){
		this.spr.TouchMove(this.t3); //调用TweenMove类中的动作函数
		let N3:number=parseInt(egret.localStorage.getItem("NUMBER2"));
		N3=N3+1;
		var M3=N3.toString();
		egret.localStorage.setItem("NUMBER2",M3);
		//egret.localStorage.clear();	
		if(this.s==21){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("t1")){
				this.G1=egret.localStorage.getItem("t1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("t1");
			let x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("t1",x1);
			
		}else if(this.s==22){
			if(egret.localStorage.getItem("t2")){
				this.G2=egret.localStorage.getItem("t2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("t2");
			let x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("t2",x2);
		}else if(this.s==23){
			if(egret.localStorage.getItem("t3")){
				this.G3=egret.localStorage.getItem("t3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("t3");
			let x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("t3",x3);
		}else if(this.s==24){
			if(egret.localStorage.getItem("t4")){
				this.G4=egret.localStorage.getItem("t4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("t4");
			let x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("t4",x4);
		}else if(this.s==25){
			if(egret.localStorage.getItem("t5")){
				this.G5=egret.localStorage.getItem("t5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("t5");
			let x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("t5",x5);
		}else if(this.s==26){
			if(egret.localStorage.getItem("t6")){
				this.G6=egret.localStorage.getItem("t6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("t6");
			let x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("t6",x6);
		}else if(this.s==27){
			if(egret.localStorage.getItem("t7")){
				this.G7=egret.localStorage.getItem("t7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("t7");
			let x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("t7",x7);
		}else if(this.s==28){
			if(egret.localStorage.getItem("t8")){
				this.G8=egret.localStorage.getItem("t8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("t8");
			let x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("t8",x8);
		}else if(this.s==29){
			if(egret.localStorage.getItem("t9")){
				this.G9=egret.localStorage.getItem("t9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("t9");
			let x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("t9",x9);
		}else if(this.s==30){
			if(egret.localStorage.getItem("t10")){
				this.G10=egret.localStorage.getItem("t10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("t10");
			let x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("t10",x10);
		}else if(this.s==31){
			if(egret.localStorage.getItem("t11")){
				this.G11=egret.localStorage.getItem("t11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("t11");
			let x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("t11",x11);
		}else if(this.s==32){
			if(egret.localStorage.getItem("t12")){
				this.G12=egret.localStorage.getItem("t12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("t12");
			let x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("t12",x12);
		}else if(this.s==33){
			if(egret.localStorage.getItem("t13")){
				this.G13=egret.localStorage.getItem("t13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("t13");
			let x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("t13",x13);
		}else if(this.s==34){
			if(egret.localStorage.getItem("t14")){
				this.G14=egret.localStorage.getItem("t14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("t14");
			let x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("t14",x14);
		}else if(this.s==35){
			if(egret.localStorage.getItem("t15")){
				this.G15=egret.localStorage.getItem("t15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("t15");
			let x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("t15",x15);
		}else if(this.s==36){
			if(egret.localStorage.getItem("t16")){
				this.G16=egret.localStorage.getItem("t16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("t16");
			let x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("t16",x16);
		}else if(this.s==37){
			if(egret.localStorage.getItem("t17")){
				this.G17=egret.localStorage.getItem("t17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("t17");
			let x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("t17",x17);
		}else if(this.s==38){
			if(egret.localStorage.getItem("t18")){
				this.G18=egret.localStorage.getItem("t18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("t18");
			let x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("t18",x18);
		}
		else if(this.s==39){
			if(egret.localStorage.getItem("t19")){
				this.G19=egret.localStorage.getItem("t19");
			}else{
				this.G19="0";
			}
			console.log(this.G19);
			console.log("t19");
			let x19:string=(parseInt(this.G19)+1).toString();
			egret.localStorage.setItem("t19",x19);
		}
		else if(this.s==40){
			if(egret.localStorage.getItem("t20")){
				this.G20=egret.localStorage.getItem("t20");
			}else{
				this.G20="0";
			}
			console.log(this.G20);
			console.log("t20");
			let x20:string=(parseInt(this.G20)+1).toString();
			egret.localStorage.setItem("t20",x20);
		}
		else if(this.s==41){
			if(egret.localStorage.getItem("t21")){
				this.G21=egret.localStorage.getItem("t21");
			}else{
				this.G21="0";
			}
			console.log(this.G21);
			console.log("t21");
			let x21:string=(parseInt(this.G21)+1).toString();
			egret.localStorage.setItem("t21",x21);
		}
		else if(this.s==42){
			if(egret.localStorage.getItem("t22")){
				this.G22=egret.localStorage.getItem("t22");
			}else{
				this.G22="0";
			}
			console.log(this.G22);
			console.log("t22");
			let x22:string=(parseInt(this.G22)+1).toString();
			egret.localStorage.setItem("t22",x22);
		}
		else if(this.s==43){
			if(egret.localStorage.getItem("t23")){
				this.G23=egret.localStorage.getItem("t23");
			}else{
				this.G23="0";
			}
			console.log(this.G23);
			console.log("t23");
			let x23:string=(parseInt(this.G23)+1).toString();
			egret.localStorage.setItem("t23",x23);
		}else if(this.s==44){
			if(egret.localStorage.getItem("t24")){
				this.G24=egret.localStorage.getItem("t24");
			}else{
				this.G24="0";
			}
			console.log(this.G24);
			console.log("t24");
			let x24:string=(parseInt(this.G24)+1).toString();
			egret.localStorage.setItem("t24",x24);
		}else if(this.s==45){
			if(egret.localStorage.getItem("t25")){
				this.G25=egret.localStorage.getItem("t25");
			}else{
				this.G25="0";
			}
			console.log(this.G25);
			console.log("t25");
			let x25:string=(parseInt(this.G25)+1).toString();
			egret.localStorage.setItem("t25",x25);
		}
        
    }
}