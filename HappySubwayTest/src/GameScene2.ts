// TypeScript file
//游戏界面
class GameScene2 extends Scene {
	public btn_qh3: eui.Label;
	public spr:TweenMove; //TweenMove的实例
	public t:egret.Bitmap;//位图
	public t2:egret.Bitmap;//位图
	public t3:egret.Bitmap;
	public btn_tc:eui.Image;
	public house:eui.Image;
	public shelf:eui.Image;
	public W:WareHouse;
	public js:json;
	public NUMber:number;//函数执行次数
	public NUMber1:number;//函数执行次数
	public NUMber2:number;//函数执行次数
	
	public a:string;
	public Game:eui.Image;
	public Gsub:SnakeGO;
	public TanC:Tanchu2=new Tanchu2();
	private s:number;
	public G1:string;
	public G2:string;
	public G3:string;
	public G4:string;
	public G5:string;
	public G6:string;
	public G7:string;
	public G8:string;
	public G9:string;
	public G10:string;
	public G11:string;
	public G12:string;
	public G13:string;
	public G14:string;
	public G15:string;
	public G16:string;
	public G17:string;
	public G18:string;
	
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/GameScene.exml";
		 this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		 
	}
	//预加载资源
	private onAddToStage(event:egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO2,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.GO3,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("cangku");
		RES.loadGroup("subway");
		
    }
	
	protected onComplete() {
		this.shelf.touchEnabled = true;
		this.shelf.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc3, this);
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		this.btn_tc.touchEnabled=true;
		this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc,this);
		this.house.touchEnabled=true;
		this.house.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTaptc2,this);
		this.Game.touchEnabled=true;
		this.Game.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GameGO,this);

	}
	private GameGO(){
		this.Gsub=new SnakeGO();
		this.addChild(this.Gsub)
	}
	private onTapqiehuan() {
		this.W=new WareHouse();
		if(this.W.Finish()==true){ 
		let s1:ThirdScene = new ThirdScene();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
		}else{
			var Tips=new egret.Bitmap();
			Tips.texture=RES.getRes("Tips");
			this.addChild(Tips);
			Tips.x=571.64;
			Tips.y=655.88;
			Tips.scaleX=0.01;
			Tips.scaleY=0.01;
			Tips.alpha=0;
			var Tween=egret.Tween.get(Tips);
			Tween.to({x:244,y:492,scaleX:1,scaleY:1,alpha:1},100);
			Tips.touchEnabled=true;
			Tips.addEventListener(egret.TouchEvent.TOUCH_TAP,function(event:egret.Event){
				this.removeChild(Tips);
			},this);
		}
		
	}
	private onTaptc(){
        let tc:Tanchu2=new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    }
	private onTaptc2(){
        let tc2:WareHouse=new WareHouse();
        SceneManager.Instance.pushScene(tc2);
    }
	private onTaptc3(){
        let tc3:shelf=new shelf();
        SceneManager.Instance.pushScene(tc3);
    }
	//实现零件位移和渐变效果
	public GO(){
			//egret.localStorage.clear();
			if(this.TanC.ProBar()==true){
				egret.localStorage.removeItem("NUMBER");
			}
			var time=new Date();
			var hour=time.getHours();
			var minutes=time.getMinutes();
			if(egret.localStorage.getItem("NUMBER")){
				this.NUMber=parseInt(egret.localStorage.getItem("NUMBER"));
			}else{
				this.NUMber=0;
			}		
			if((hour>=8&&hour<10)||(hour>=16&&hour<18)||(hour>=20&&hour<22)){ //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
				if(this.NUMber==0){
					this.s=Math.floor(Math.random() * (18 - 1 + 1)) + 1;			//创建1-18之间的随机数字
					this.a=this.s.toString();
					this.t=new egret.Bitmap();									//创建零件位图	
					this.t.texture=RES.getRes(this.a);							//根据数字找到图片的编号
					this.addChild(this.t);
					this.t.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
					this.t.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
					this.t.scaleX=0.2;
					this.t.scaleY=0.2;
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

		
		if((parseInt(egret.localStorage.getItem("d1"))==7)||(this.data()==true)){ //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
			if(this.NUMber1==0){
				this.s=Math.floor(Math.random() * (18 - 1 + 1)) + 1;			//创建1-18之间的随机数字
				this.a=this.s.toString();
				this.t2=new egret.Bitmap();									//创建零件位图	
				this.t2.texture=RES.getRes(this.a);							//根据数字找到图片的编号
				this.addChild(this.t2);
				this.t2.x=Math.floor(Math.random() * (400 - 120 + 120)) + 120;
				this.t2.y=Math.floor(Math.random() * (350 - 150 + 150)) + 150;			
				this.t2.scaleX=0.2;
				this.t2.scaleY=0.2;
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
		
        var data2 ="南湖家园" //JSON.parse(<string>egret.localStorage.getItem('json'));
        if(data2=="南湖家园"){
           return true;
        }else {
            return false;
        }
    }
	public data2():boolean {	
		
        var data3 ="15"// JSON.parse(<string>egret.localStorage.getItem('json2'));
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
		//egret.localStorage.clear();	
		if(this.s==1){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("g1")){
				this.G1=egret.localStorage.getItem("g1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("g1");
			var x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("g1",x1);
			
		}else if(this.s==2){
			if(egret.localStorage.getItem("g2")){
				this.G2=egret.localStorage.getItem("g2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("g2");
			var x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("g2",x2);
		}else if(this.s==3){
			if(egret.localStorage.getItem("g3")){
				this.G3=egret.localStorage.getItem("g3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("g3");
			var x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("g3",x3);
		}else if(this.s==4){
			if(egret.localStorage.getItem("g4")){
				this.G4=egret.localStorage.getItem("g4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("g4");
			var x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("g4",x4);
		}else if(this.s==5){
			if(egret.localStorage.getItem("g5")){
				this.G5=egret.localStorage.getItem("g5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("g5");
			var x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("g5",x5);
		}else if(this.s==6){
			if(egret.localStorage.getItem("g6")){
				this.G6=egret.localStorage.getItem("g6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("g6");
			var x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("g6",x6);
		}else if(this.s==7){
			if(egret.localStorage.getItem("g7")){
				this.G7=egret.localStorage.getItem("g7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("g7");
			var x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("g7",x7);
		}else if(this.s==8){
			if(egret.localStorage.getItem("g8")){
				this.G8=egret.localStorage.getItem("g8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("g8");
			var x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("g8",x8);
		}else if(this.s==9){
			if(egret.localStorage.getItem("g9")){
				this.G9=egret.localStorage.getItem("g9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("g9");
			var x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("g9",x9);
		}else if(this.s==10){
			if(egret.localStorage.getItem("g10")){
				this.G10=egret.localStorage.getItem("g10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("g10");
			var x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("g10",x10);
		}else if(this.s==11){
			if(egret.localStorage.getItem("g11")){
				this.G11=egret.localStorage.getItem("g11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("g11");
			var x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("g11",x11);
		}else if(this.s==12){
			if(egret.localStorage.getItem("g12")){
				this.G12=egret.localStorage.getItem("g12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("g12");
			var x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("g12",x12);
		}else if(this.s==13){
			if(egret.localStorage.getItem("g13")){
				this.G13=egret.localStorage.getItem("g13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("g13");
			var x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("g13",x13);
		}else if(this.s==14){
			if(egret.localStorage.getItem("g14")){
				this.G14=egret.localStorage.getItem("g14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("g14");
			var x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("g14",x14);
		}else if(this.s==15){
			if(egret.localStorage.getItem("g15")){
				this.G15=egret.localStorage.getItem("g15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("g15");
			var x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("g15",x15);
		}else if(this.s==16){
			if(egret.localStorage.getItem("g16")){
				this.G16=egret.localStorage.getItem("g16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("g16");
			var x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("g16",x16);
		}else if(this.s==17){
			if(egret.localStorage.getItem("g17")){
				this.G17=egret.localStorage.getItem("g17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("g17");
			var x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("g17",x17);
		}else if(this.s==18){
			if(egret.localStorage.getItem("g18")){
				this.G18=egret.localStorage.getItem("g18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("g18");
			var x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("g18",x18);
		}
        
    }	
	public Move2(event:egret.TouchEvent){
		this.spr.TouchMove(this.t2); //调用TweenMove类中的动作函数
		let N2:number=parseInt(egret.localStorage.getItem("NUMBER1"));
		N2=N2+1;
		var M2=N2.toString();
		egret.localStorage.setItem("NUMBER1",M2);
		//egret.localStorage.clear();	
		if(this.s==1){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("g1")){
				this.G1=egret.localStorage.getItem("g1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("g1");
			var x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("g1",x1);
			
		}else if(this.s==2){
			if(egret.localStorage.getItem("g2")){
				this.G2=egret.localStorage.getItem("g2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("g2");
			var x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("g2",x2);
		}else if(this.s==3){
			if(egret.localStorage.getItem("g3")){
				this.G3=egret.localStorage.getItem("g3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("g3");
			var x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("g3",x3);
		}else if(this.s==4){
			if(egret.localStorage.getItem("g4")){
				this.G4=egret.localStorage.getItem("g4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("g4");
			var x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("g4",x4);
		}else if(this.s==5){
			if(egret.localStorage.getItem("g5")){
				this.G5=egret.localStorage.getItem("g5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("g5");
			var x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("g5",x5);
		}else if(this.s==6){
			if(egret.localStorage.getItem("g6")){
				this.G6=egret.localStorage.getItem("g6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("g6");
			var x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("g6",x6);
		}else if(this.s==7){
			if(egret.localStorage.getItem("g7")){
				this.G7=egret.localStorage.getItem("g7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("g7");
			var x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("g7",x7);
		}else if(this.s==8){
			if(egret.localStorage.getItem("g8")){
				this.G8=egret.localStorage.getItem("g8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("g8");
			var x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("g8",x8);
		}else if(this.s==9){
			if(egret.localStorage.getItem("g9")){
				this.G9=egret.localStorage.getItem("g9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("g9");
			var x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("g9",x9);
		}else if(this.s==10){
			if(egret.localStorage.getItem("g10")){
				this.G10=egret.localStorage.getItem("g10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("g10");
			var x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("g10",x10);
		}else if(this.s==11){
			if(egret.localStorage.getItem("g11")){
				this.G11=egret.localStorage.getItem("g11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("g11");
			var x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("g11",x11);
		}else if(this.s==12){
			if(egret.localStorage.getItem("g12")){
				this.G12=egret.localStorage.getItem("g12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("g12");
			var x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("g12",x12);
		}else if(this.s==13){
			if(egret.localStorage.getItem("g13")){
				this.G13=egret.localStorage.getItem("g13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("g13");
			var x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("g13",x13);
		}else if(this.s==14){
			if(egret.localStorage.getItem("g14")){
				this.G14=egret.localStorage.getItem("g14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("g14");
			var x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("g14",x14);
		}else if(this.s==15){
			if(egret.localStorage.getItem("g15")){
				this.G15=egret.localStorage.getItem("g15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("g15");
			var x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("g15",x15);
		}else if(this.s==16){
			if(egret.localStorage.getItem("g16")){
				this.G16=egret.localStorage.getItem("g16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("g16");
			var x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("g16",x16);
		}else if(this.s==17){
			if(egret.localStorage.getItem("g17")){
				this.G17=egret.localStorage.getItem("g17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("g17");
			var x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("g17",x17);
		}else if(this.s==18){
			if(egret.localStorage.getItem("g18")){
				this.G18=egret.localStorage.getItem("g18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("g18");
			var x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("g18",x18);
		}
        
    }
	public Move3(event:egret.TouchEvent){
		this.spr.TouchMove(this.t3); //调用TweenMove类中的动作函数
		let N3:number=parseInt(egret.localStorage.getItem("NUMBER2"));
		N3=N3+1;
		var M3=N3.toString();
		egret.localStorage.setItem("NUMBER2",M3);
		//egret.localStorage.clear();	
		if(this.s==1){						//this.G1...G18为计数器，每当对应编号的图片被点击，计数器加1
			if(egret.localStorage.getItem("g1")){
				this.G1=egret.localStorage.getItem("g1");
			}else{
				this.G1="0";
			}
			console.log(this.G1);
			console.log("g1");
			var x1:string=(parseInt(this.G1)+1).toString();
			egret.localStorage.setItem("g1",x1);
			
		}else if(this.s==2){
			if(egret.localStorage.getItem("g2")){
				this.G2=egret.localStorage.getItem("g2");
			}else{
				this.G2="0";
			}
			console.log(this.G2);
			console.log("g2");
			var x2:string=(parseInt(this.G2)+1).toString();
			egret.localStorage.setItem("g2",x2);
		}else if(this.s==3){
			if(egret.localStorage.getItem("g3")){
				this.G3=egret.localStorage.getItem("g3");
			}else{
				this.G3="0";
			}
			console.log(this.G3);
			console.log("g3");
			var x3:string=(parseInt(this.G3)+1).toString();
			egret.localStorage.setItem("g3",x3);
		}else if(this.s==4){
			if(egret.localStorage.getItem("g4")){
				this.G4=egret.localStorage.getItem("g4");
			}else{
				this.G4="0";
			}
			console.log(this.G4);
			console.log("g4");
			var x4:string=(parseInt(this.G4)+1).toString();
			egret.localStorage.setItem("g4",x4);
		}else if(this.s==5){
			if(egret.localStorage.getItem("g5")){
				this.G5=egret.localStorage.getItem("g5");
			}else{
				this.G5="0";
			}
			console.log(this.G5);
			console.log("g5");
			var x5:string=(parseInt(this.G5)+1).toString();
			egret.localStorage.setItem("g5",x5);
		}else if(this.s==6){
			if(egret.localStorage.getItem("g6")){
				this.G6=egret.localStorage.getItem("g6");
			}else{
				this.G6="0";
			}
			console.log(this.G6);
			console.log("g6");
			var x6:string=(parseInt(this.G6)+1).toString();
			egret.localStorage.setItem("g6",x6);
		}else if(this.s==7){
			if(egret.localStorage.getItem("g7")){
				this.G7=egret.localStorage.getItem("g7");
			}else{
				this.G7="0";
			}
			console.log(this.G7);
			console.log("g7");
			var x7:string=(parseInt(this.G7)+1).toString();
			egret.localStorage.setItem("g7",x7);
		}else if(this.s==8){
			if(egret.localStorage.getItem("g8")){
				this.G8=egret.localStorage.getItem("g8");
			}else{
				this.G8="0";
			}
			console.log(this.G8);
			console.log("g8");
			var x8:string=(parseInt(this.G8)+1).toString();
			egret.localStorage.setItem("g8",x8);
		}else if(this.s==9){
			if(egret.localStorage.getItem("g9")){
				this.G9=egret.localStorage.getItem("g9");
			}else{
				this.G9="0";
			}
			console.log(this.G9);
			console.log("g9");
			var x9:string=(parseInt(this.G9)+1).toString();
			egret.localStorage.setItem("g9",x9);
		}else if(this.s==10){
			if(egret.localStorage.getItem("g10")){
				this.G10=egret.localStorage.getItem("g10");
			}else{
				this.G10="0";
			}
			console.log(this.G10);
			console.log("g10");
			var x10:string=(parseInt(this.G10)+1).toString();
			egret.localStorage.setItem("g10",x10);
		}else if(this.s==11){
			if(egret.localStorage.getItem("g11")){
				this.G11=egret.localStorage.getItem("g11");
			}else{
				this.G11="0";
			}
			console.log(this.G11);
			console.log("g11");
			var x11:string=(parseInt(this.G11)+1).toString();
			egret.localStorage.setItem("g11",x11);
		}else if(this.s==12){
			if(egret.localStorage.getItem("g12")){
				this.G12=egret.localStorage.getItem("g12");
			}else{
				this.G12="0";
			}
			console.log(this.G12);
			console.log("g12");
			var x12:string=(parseInt(this.G12)+1).toString();
			egret.localStorage.setItem("g12",x12);
		}else if(this.s==13){
			if(egret.localStorage.getItem("g13")){
				this.G13=egret.localStorage.getItem("g13");
			}else{
				this.G13="0";
			}
			console.log(this.G13);
			console.log("g13");
			var x13:string=(parseInt(this.G13)+1).toString();
			egret.localStorage.setItem("g13",x13);
		}else if(this.s==14){
			if(egret.localStorage.getItem("g14")){
				this.G14=egret.localStorage.getItem("g14");
			}else{
				this.G14="0";
			}
			console.log(this.G14);
			console.log("g14");
			var x14:string=(parseInt(this.G14)+1).toString();
			egret.localStorage.setItem("g14",x14);
		}else if(this.s==15){
			if(egret.localStorage.getItem("g15")){
				this.G15=egret.localStorage.getItem("g15");
			}else{
				this.G15="0";
			}
			console.log(this.G15);
			console.log("g15");
			var x15:string=(parseInt(this.G15)+1).toString();
			egret.localStorage.setItem("g15",x15);
		}else if(this.s==16){
			if(egret.localStorage.getItem("g16")){
				this.G16=egret.localStorage.getItem("g16");
			}else{
				this.G16="0";
			}
			console.log(this.G16);
			console.log("g16");
			var x16:string=(parseInt(this.G16)+1).toString();
			egret.localStorage.setItem("g16",x16);
		}else if(this.s==17){
			if(egret.localStorage.getItem("g17")){
				this.G17=egret.localStorage.getItem("g17");
			}else{
				this.G17="0";
			}
			console.log(this.G17);
			console.log("g17");
			var x17:string=(parseInt(this.G17)+1).toString();
			egret.localStorage.setItem("g17",x17);
		}else if(this.s==18){
			if(egret.localStorage.getItem("g18")){
				this.G18=egret.localStorage.getItem("g18");
			}else{
				this.G18="0";
			}
			console.log(this.G18);
			console.log("g18");
			var x18:string=(parseInt(this.G18)+1).toString();
			egret.localStorage.setItem("g18",x18);
		}
        
    }
	
}