// TypeScript file
class WareHouse_2 extends Scene{
    public Close:eui.Image;

    public i1:string;
    public i2:string;
    public i3:string;
    public i4:string;
    public i5:string;
    public i6:string;
    public i7:string;
    public i8:string;
    public i9:string;
    public i10:string;
    public i11:string;
    public i12:string;
    public i13:string;
    public i14:string;
    public i15:string;
    public i16:string;
    public i17:string;
    public i18:string;
    public i19:string;
    public i20:string;
    public i21:string;
    public i22:string;
    public i23:string;
    public i24:string;
    public i25:string;
    
    public constructor(){
        super();
        this.skinName="resource/eui_skins/ware2.exml"
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.Label,this);
    }
    protected onComplete(){
        this.Close.touchEnabled=true;
        this.Close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClose,this);
    
    }
    private OnClose(event:egret.TouchEvent){

        SceneManager.Instance.closeScene();
    }
    
    public Label(){
        this.i1=egret.localStorage.getItem("t1");           //获取本地数据
        this.i2=egret.localStorage.getItem("t2");
        this.i3=egret.localStorage.getItem("t3");
        this.i4=egret.localStorage.getItem("t4");
        this.i5=egret.localStorage.getItem("t5");
        this.i6=egret.localStorage.getItem("t6");
        this.i7=egret.localStorage.getItem("t7");
        this.i8=egret.localStorage.getItem("t8");
        this.i9=egret.localStorage.getItem("t9");
        this.i10=egret.localStorage.getItem("t10");
        this.i11=egret.localStorage.getItem("t11");
        this.i12=egret.localStorage.getItem("t12");
        this.i13=egret.localStorage.getItem("t13");
        this.i14=egret.localStorage.getItem("t14");
        this.i15=egret.localStorage.getItem("t15");
        this.i16=egret.localStorage.getItem("t16");
        this.i17=egret.localStorage.getItem("t17");
        this.i18=egret.localStorage.getItem("t18");
        this.i19=egret.localStorage.getItem("t19");
        this.i20=egret.localStorage.getItem("t20");
        this.i21=egret.localStorage.getItem("t21");
        this.i22=egret.localStorage.getItem("t22");
        this.i23=egret.localStorage.getItem("t23");
        this.i24=egret.localStorage.getItem("t24");
        this.i25=egret.localStorage.getItem("t25");

        var L1=new egret.TextField();      //将获取到的数据添加到对应零件下。。。本来应该通过循环实现，但是不知为何会报错
        L1.text=this.i1;
        this.addChild(L1);
        L1.x=95.5;
        L1.y=274.64;

        var L2=new egret.TextField();
        L2.text=this.i2;
        this.addChild(L2);
        L2.x=239.5;
        L2.y=274.64;

        var L3=new egret.TextField();
        L3.text=this.i3;
        this.addChild(L3);
        L3.x=383.5;
        L3.y=274.64;

        var L4=new egret.TextField();
        L4.text=this.i4;
        this.addChild(L4);
        L4.x=527.5;
        L4.y=274.64;

        var L5=new egret.TextField();
        L5.text=this.i5;
        this.addChild(L5);
        L5.x=95.5;
        L5.y=390.7;

        var L6=new egret.TextField();
        L6.text=this.i6;
        this.addChild(L6);
        L6.x=239.5;
        L6.y=390.7;

        var L7=new egret.TextField();
        L7.text=this.i7;
        this.addChild(L7);
        L7.x=383.5;
        L7.y=390.7;

        var L8=new egret.TextField();
        L8.text=this.i8;
        this.addChild(L8);
        L8.x=527.5;
        L8.y=390.7;

        var L9=new egret.TextField();
        L9.text=this.i9;
        this.addChild(L9);
        L9.x=95.5;
        L9.y=500.72;

        var L10=new egret.TextField();
        L10.text=this.i10;
        this.addChild(L10);
        L10.x=239.5;
        L10.y=500.72;

        var L11=new egret.TextField();
        L11.text=this.i11;
        this.addChild(L11);
        L11.x=383.5;
        L11.y=500.72;

        var L12=new egret.TextField();
        L12.text=this.i12;
        this.addChild(L12);
        L12.x=527.5;
        L12.y=500.72;

        var L13=new egret.TextField();
        L13.text=this.i13;
        this.addChild(L13);
        L13.x=95.5;
        L13.y=624.36;

        var L14=new egret.TextField();
        L14.text=this.i14;
        this.addChild(L14);
        L14.x=239.5;
        L14.y=624.36;

        var L15=new egret.TextField();
        L15.text=this.i15;
        this.addChild(L15);
        L15.x=383.5;
        L15.y=624.36;

        var L16=new egret.TextField();
        L16.text=this.i16;
        this.addChild(L16);
        L16.x=527.5;
        L16.y=624.36;

        var L17=new egret.TextField();
        L17.text=this.i17;
        this.addChild(L17);
        L17.x=95.5;
        L17.y=740.11;

        var L18=new egret.TextField();
        L18.text=this.i18;
        this.addChild(L18);
        L18.x=239.5;
        L18.y=740.11;

        var L19=new egret.TextField();
        L19.text=this.i19;
        this.addChild(L19);
        L19.x=383.5;
        L19.y=740.11;

        var L20=new egret.TextField();
        L20.text=this.i20;
        this.addChild(L20);
        L20.x=527.5;
        L20.y=740.11;

        var L21=new egret.TextField();
        L21.text=this.i21;
        this.addChild(L21);
        L21.x=95.5;
        L21.y=861.63;

        var L22=new egret.TextField();
        L22.text=this.i22;
        this.addChild(L22);
        L22.x=239.5;
        L22.y=861.63;

        var L23=new egret.TextField();
        L23.text=this.i23;
        this.addChild(L23);
        L23.x=383.5;
        L23.y=861.63;
        
        var L24=new egret.TextField();
        L24.text=this.i24;
        this.addChild(L24);
        L24.x=527.5;
        L24.y=861.63;

         var L25=new egret.TextField();
        L25.text=this.i25;
        this.addChild(L25);
        L25.x=95.5;
        L25.y=982.63;

    }
    
}