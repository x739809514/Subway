// TypeScript file
//仓库页面，仓库中存放当前采集到的零件个数
class WareHouse extends Scene{
    public Close:eui.Button;
    public r1:string;       //声明变量，在下面的代码中这些变量会获取浏览器中本地存储的数据（即当前采集到的零件数）
    public r2:string;
    public r3:string;
    public r4:string;
    public r5:string;
    public r6:string;
    public r7:string;
    public r8:string;
    public r9:string;
    public r10:string;
    public r11:string;
    public r12:string;
    public r13:string;
    public r14:string;
    public r15:string;
    public r16:string;
    public r17:string;
    public r18:string;

    public R1:number;       //声明变量，在下面的代码中这些变量会获取浏览器中本地存储的数据（即当前采集到的零件数）
    public R2:number;
    public R3:number;
    public R4:number;
    public R5:number;
    public R6:number;
    public R7:number;
    public R8:number;
    public R9:number;
    public R10:number;
    public R11:number;
    public R12:number;
    public R13:number;
    public R14:number;
    public R15:number;
    public R16:number;
    public R17:number;
    public R18:number;



    public constructor(){
        super();
        this.skinName = "resource/eui_skins/CangKu.exml";
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.Label,this);
    }
    protected onComplete(){
        this.Close.touchEnabled=true;
        this.Close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClose,this)   
    }

    private OnClose(event:egret.TouchEvent){
        
        SceneManager.Instance.closeScene();
    }
    public Label(){
        this.r1=egret.localStorage.getItem("g1");           //获取本地数据
        this.r2=egret.localStorage.getItem("g2");
        this.r3=egret.localStorage.getItem("g3");
        this.r4=egret.localStorage.getItem("g4");
        this.r5=egret.localStorage.getItem("g5");
        this.r6=egret.localStorage.getItem("g6");
        this.r7=egret.localStorage.getItem("g7");
        this.r8=egret.localStorage.getItem("g8");
        this.r9=egret.localStorage.getItem("g9");
        this.r10=egret.localStorage.getItem("g10");
        this.r11=egret.localStorage.getItem("g11");
        this.r12=egret.localStorage.getItem("g12");
        this.r13=egret.localStorage.getItem("g13");
        this.r14=egret.localStorage.getItem("g14");
        this.r15=egret.localStorage.getItem("g15");
        this.r16=egret.localStorage.getItem("g16");
        this.r17=egret.localStorage.getItem("g17");
        this.r18=egret.localStorage.getItem("g18");

        var L1=new egret.TextField();      //将获取到的数据添加到对应零件下。。。本来应该通过循环实现，但是不知为何会报错
        L1.text=this.r1;
        this.addChild(L1);
        L1.x=113.31;
        L1.y=304.22;

        var L2=new egret.TextField();
        L2.text=this.r2;
        this.addChild(L2);
        L2.x=313.03;
        L2.y=304.22;

        var L3=new egret.TextField();
        L3.text=this.r3;
        this.addChild(L3);
        L3.x=517.25;
        L3.y=304.22;

        var L4=new egret.TextField();
        L4.text=this.r4;
        this.addChild(L4);
        L4.x=113.31;
        L4.y=468.77;

        var L5=new egret.TextField();
        L5.text=this.r5;
        this.addChild(L5);
        L5.x=313.03;
        L5.y=468.77;

        var L6=new egret.TextField();
        L6.text=this.r6;
        this.addChild(L6);
        L6.x=517.25;
        L6.y=468.77;

        var L7=new egret.TextField();
        L7.text=this.r7;
        this.addChild(L7);
        L7.x=113.31;
        L7.y=626.93;

        var L8=new egret.TextField();
        L8.text=this.r8;
        this.addChild(L8);
        L8.x=313.03;
        L8.y=626.93;

        var L9=new egret.TextField();
        L9.text=this.r9;
        this.addChild(L9);
        L9.x=517.25;
        L9.y=626.93;

        var L10=new egret.TextField();
        L10.text=this.r10;
        this.addChild(L10);
        L10.x=113.31;
        L10.y=784.52;

        var L11=new egret.TextField();
        L11.text=this.r11;
        this.addChild(L11);
        L11.x=313.03;
        L11.y=784.52;

        var L12=new egret.TextField();
        L12.text=this.r12;
        this.addChild(L12);
        L12.x=517.25;
        L12.y=784.52;

        var L13=new egret.TextField();
        L13.text=this.r13;
        this.addChild(L13);
        L13.x=113.31;
        L13.y=949.66;

        var L14=new egret.TextField();
        L14.text=this.r14;
        this.addChild(L14);
        L14.x=313.03;
        L14.y=949.66;

        var L15=new egret.TextField();
        L15.text=this.r15;
        this.addChild(L15);
        L15.x=517.25;
        L15.y=949.66;

        var L16=new egret.TextField();
        L16.text=this.r16;
        this.addChild(L16);
        L16.x=113.31;
        L16.y=1092.36;

        var L17=new egret.TextField();
        L17.text=this.r17;
        this.addChild(L17);
        L17.x=313.03;
        L17.y=1092.36;

        var L18=new egret.TextField();
        L18.text=this.r18;
        this.addChild(L18);
        L18.x=517.25;
        L18.y=1092.36;

    }
    public Finish():Boolean{
        this.R1=parseInt(egret.localStorage.getItem("g1"));
        this.R2=parseInt(egret.localStorage.getItem("g2"));
        this.R3=parseInt(egret.localStorage.getItem("g3"));
        this.R4=parseInt(egret.localStorage.getItem("g4"));
        this.R5=parseInt(egret.localStorage.getItem("g5"));
        this.R6=parseInt(egret.localStorage.getItem("g6"));
        this.R7=parseInt(egret.localStorage.getItem("g7"));
        this.R8=parseInt(egret.localStorage.getItem("g8"));
        this.R9=parseInt(egret.localStorage.getItem("g9"));
        this.R10=parseInt(egret.localStorage.getItem("g10"));
        this.R11=parseInt(egret.localStorage.getItem("g11"));
        this.R12=parseInt(egret.localStorage.getItem("g12"));
        this.R13=parseInt(egret.localStorage.getItem("g13"));
        this.R14=parseInt(egret.localStorage.getItem("g14"));
        this.R15=parseInt(egret.localStorage.getItem("g15"));
        this.R16=parseInt(egret.localStorage.getItem("g16"));
        this.R17=parseInt(egret.localStorage.getItem("g17"));
        this.R18=parseInt(egret.localStorage.getItem("g18"));
        if(this.R1>=1&&this.R2>=1&&this.R3>=1&&this.R4>=1&&this.R5>=1&&this.R6>=1&&this.R7>=1&&this.R8>=1&&this.R9>=1&&this.R10>=1&&this.R11>=1&&this.R12>=1&&this.R13>=1&&this.R14>=1&&this.R15>=1&&this.R16>=1&&this.R17>=1&&this.R18>=1){
            return true;
        }else{
            return false;
        }
    }
}