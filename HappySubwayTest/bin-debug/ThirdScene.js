var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript file
//结束界面
var ThirdScene = (function (_super) {
    __extends(ThirdScene, _super);
    function ThirdScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/ThirdScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    //预加载资源
    ThirdScene.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.GO, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.GO2, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("TrainGear2");
    };
    ThirdScene.prototype.onComplete = function () {
        this.btn_qh3.touchEnabled = true;
        this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
        this.btn_tc.touchEnabled = true;
        this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
        this.house_2.touchEnabled = true;
        this.house_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc2, this);
        // this.Left.touchEnabled = true;
        // this.Left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapClose, this);
    };
    ThirdScene.prototype.onTapqiehuan = function () {
        var s1 = new ThirdScene();
        //切换到最后的场景
        SceneManager.Instance.changeScene(s1);
    };
    ThirdScene.prototype.onTaptc = function () {
        var tc = new Tanchu2();
        SceneManager.Instance.pushScene(tc);
    };
    ThirdScene.prototype.onTaptc2 = function () {
        var tc2 = new WareHouse_2();
        SceneManager.Instance.pushScene(tc2);
    };
    // private onTapClose() {
    // 	let s1:GameScene2=new GameScene2();
    //     SceneManager.Instance.changeScene(s1);
    // }
    //实现零件位移和渐变效果
    ThirdScene.prototype.GO = function () {
        //egret.localStorage.clear();
        this.s = Math.round(Math.random() * (45 - 21)) + 21; //创建45-21之间的随机数字
        this.a = this.s.toString();
        var time = new Date();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        if ((hour >= 8 && hour < 13) || (hour >= 13 && hour < 18) || (hour >= 20 && hour < 22)) {
            this.t = new egret.Bitmap(); //创建零件位图	
            this.t.texture = RES.getRes(this.a); //根据数字找到图片的编号
            this.addChild(this.t);
            this.t.x = Math.floor(Math.random() * (400 - 120 + 120)) + 120;
            this.t.y = Math.floor(Math.random() * (350 - 150 + 150)) + 150;
            this.t.scaleX = 0.3;
            this.t.scaleY = 0.3;
            this.spr = new TweenMove(); //TweenMove的实例
            // this.spr.BitmapTest(this.t);
            this.t.touchEnabled = true; //设置鼠标点击事件
            this.t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Move, this);
        }
    };
    ThirdScene.prototype.GO2 = function () {
        //egret.localStorage.clear();
        if (parseInt(egret.localStorage.getItem("d1")) == 7) {
            this.s = Math.floor(Math.random() * (45 - 21 + 21)) + 21; //创建1-18之间的随机数字
            this.a = this.s.toString(); //规定零件刷新时间，每天的（8-10），（16-18），（20-22）
            this.t2 = new egret.Bitmap(); //创建零件位图	
            this.t2.texture = RES.getRes(this.a); //根据数字找到图片的编号
            this.addChild(this.t2);
            this.t2.x = Math.floor(Math.random() * (400 - 120 + 120)) + 120;
            this.t2.y = Math.floor(Math.random() * (350 - 150 + 150)) + 150;
            this.t2.scaleX = 0.3;
            this.t2.scaleY = 0.3;
            this.spr = new TweenMove(); //TweenMove的实例
            // this.spr.BitmapTest(this.t);
            this.t2.touchEnabled = true; //设置鼠标点击事件
            this.t2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Move2, this);
        }
    };
    ThirdScene.prototype.Move = function (event) {
        this.spr.TouchMove(this.t); //调用TweenMove类中的动作函数
        //console.log(this.s)
        //egret.localStorage.clear();	
        if (this.s == 21) {
            if (egret.localStorage.getItem("t1")) {
                this.G1 = egret.localStorage.getItem("t1");
            }
            else {
                this.G1 = "0";
            }
            console.log(this.G1);
            console.log("t1");
            var x1 = (parseInt(this.G1) + 1).toString();
            egret.localStorage.setItem("t1", x1);
        }
        else if (this.s == 22) {
            if (egret.localStorage.getItem("t2")) {
                this.G2 = egret.localStorage.getItem("t2");
            }
            else {
                this.G2 = "0";
            }
            console.log(this.G2);
            console.log("t2");
            var x2 = (parseInt(this.G2) + 1).toString();
            egret.localStorage.setItem("t2", x2);
        }
        else if (this.s == 23) {
            if (egret.localStorage.getItem("t3")) {
                this.G3 = egret.localStorage.getItem("t3");
            }
            else {
                this.G3 = "0";
            }
            console.log(this.G3);
            console.log("t3");
            var x3 = (parseInt(this.G3) + 1).toString();
            egret.localStorage.setItem("t3", x3);
        }
        else if (this.s == 24) {
            if (egret.localStorage.getItem("t4")) {
                this.G4 = egret.localStorage.getItem("t4");
            }
            else {
                this.G4 = "0";
            }
            console.log(this.G4);
            console.log("t4");
            var x4 = (parseInt(this.G4) + 1).toString();
            egret.localStorage.setItem("t4", x4);
        }
        else if (this.s == 25) {
            if (egret.localStorage.getItem("t5")) {
                this.G5 = egret.localStorage.getItem("t5");
            }
            else {
                this.G5 = "0";
            }
            console.log(this.G5);
            console.log("t5");
            var x5 = (parseInt(this.G5) + 1).toString();
            egret.localStorage.setItem("t5", x5);
        }
        else if (this.s == 26) {
            if (egret.localStorage.getItem("t6")) {
                this.G6 = egret.localStorage.getItem("t6");
            }
            else {
                this.G6 = "0";
            }
            console.log(this.G6);
            console.log("t6");
            var x6 = (parseInt(this.G6) + 1).toString();
            egret.localStorage.setItem("t6", x6);
        }
        else if (this.s == 27) {
            if (egret.localStorage.getItem("t7")) {
                this.G7 = egret.localStorage.getItem("t7");
            }
            else {
                this.G7 = "0";
            }
            console.log(this.G7);
            console.log("t7");
            var x7 = (parseInt(this.G7) + 1).toString();
            egret.localStorage.setItem("t7", x7);
        }
        else if (this.s == 28) {
            if (egret.localStorage.getItem("t8")) {
                this.G8 = egret.localStorage.getItem("t8");
            }
            else {
                this.G8 = "0";
            }
            console.log(this.G8);
            console.log("t8");
            var x8 = (parseInt(this.G8) + 1).toString();
            egret.localStorage.setItem("t8", x8);
        }
        else if (this.s == 29) {
            if (egret.localStorage.getItem("t9")) {
                this.G9 = egret.localStorage.getItem("t9");
            }
            else {
                this.G9 = "0";
            }
            console.log(this.G9);
            console.log("t9");
            var x9 = (parseInt(this.G9) + 1).toString();
            egret.localStorage.setItem("t9", x9);
        }
        else if (this.s == 30) {
            if (egret.localStorage.getItem("t10")) {
                this.G10 = egret.localStorage.getItem("t10");
            }
            else {
                this.G10 = "0";
            }
            console.log(this.G10);
            console.log("t10");
            var x10 = (parseInt(this.G10) + 1).toString();
            egret.localStorage.setItem("t10", x10);
        }
        else if (this.s == 31) {
            if (egret.localStorage.getItem("t11")) {
                this.G11 = egret.localStorage.getItem("t11");
            }
            else {
                this.G11 = "0";
            }
            console.log(this.G11);
            console.log("t11");
            var x11 = (parseInt(this.G11) + 1).toString();
            egret.localStorage.setItem("t11", x11);
        }
        else if (this.s == 32) {
            if (egret.localStorage.getItem("t12")) {
                this.G12 = egret.localStorage.getItem("t12");
            }
            else {
                this.G12 = "0";
            }
            console.log(this.G12);
            console.log("t12");
            var x12 = (parseInt(this.G12) + 1).toString();
            egret.localStorage.setItem("t12", x12);
        }
        else if (this.s == 33) {
            if (egret.localStorage.getItem("t13")) {
                this.G13 = egret.localStorage.getItem("t13");
            }
            else {
                this.G13 = "0";
            }
            console.log(this.G13);
            console.log("t13");
            var x13 = (parseInt(this.G13) + 1).toString();
            egret.localStorage.setItem("t13", x13);
        }
        else if (this.s == 34) {
            if (egret.localStorage.getItem("t14")) {
                this.G14 = egret.localStorage.getItem("t14");
            }
            else {
                this.G14 = "0";
            }
            console.log(this.G14);
            console.log("t14");
            var x14 = (parseInt(this.G14) + 1).toString();
            egret.localStorage.setItem("t14", x14);
        }
        else if (this.s == 35) {
            if (egret.localStorage.getItem("t15")) {
                this.G15 = egret.localStorage.getItem("t15");
            }
            else {
                this.G15 = "0";
            }
            console.log(this.G15);
            console.log("t15");
            var x15 = (parseInt(this.G15) + 1).toString();
            egret.localStorage.setItem("t15", x15);
        }
        else if (this.s == 36) {
            if (egret.localStorage.getItem("t16")) {
                this.G16 = egret.localStorage.getItem("t16");
            }
            else {
                this.G16 = "0";
            }
            console.log(this.G16);
            console.log("t16");
            var x16 = (parseInt(this.G16) + 1).toString();
            egret.localStorage.setItem("t16", x16);
        }
        else if (this.s == 37) {
            if (egret.localStorage.getItem("t17")) {
                this.G17 = egret.localStorage.getItem("t17");
            }
            else {
                this.G17 = "0";
            }
            console.log(this.G17);
            console.log("t17");
            var x17 = (parseInt(this.G17) + 1).toString();
            egret.localStorage.setItem("t17", x17);
        }
        else if (this.s == 38) {
            if (egret.localStorage.getItem("t18")) {
                this.G18 = egret.localStorage.getItem("t18");
            }
            else {
                this.G18 = "0";
            }
            console.log(this.G18);
            console.log("t18");
            var x18 = (parseInt(this.G18) + 1).toString();
            egret.localStorage.setItem("t18", x18);
        }
        else if (this.s == 39) {
            if (egret.localStorage.getItem("t19")) {
                this.G19 = egret.localStorage.getItem("t19");
            }
            else {
                this.G19 = "0";
            }
            console.log(this.G19);
            console.log("t19");
            var x19 = (parseInt(this.G19) + 1).toString();
            egret.localStorage.setItem("t19", x19);
        }
        else if (this.s == 40) {
            if (egret.localStorage.getItem("t20")) {
                this.G20 = egret.localStorage.getItem("t20");
            }
            else {
                this.G20 = "0";
            }
            console.log(this.G20);
            console.log("t20");
            var x20 = (parseInt(this.G20) + 1).toString();
            egret.localStorage.setItem("t20", x20);
        }
        else if (this.s == 41) {
            if (egret.localStorage.getItem("t21")) {
                this.G21 = egret.localStorage.getItem("t21");
            }
            else {
                this.G21 = "0";
            }
            console.log(this.G21);
            console.log("t21");
            var x21 = (parseInt(this.G21) + 1).toString();
            egret.localStorage.setItem("t21", x21);
        }
        else if (this.s == 42) {
            if (egret.localStorage.getItem("t22")) {
                this.G22 = egret.localStorage.getItem("t22");
            }
            else {
                this.G22 = "0";
            }
            console.log(this.G22);
            console.log("t22");
            var x22 = (parseInt(this.G22) + 1).toString();
            egret.localStorage.setItem("t22", x22);
        }
        else if (this.s == 43) {
            if (egret.localStorage.getItem("t23")) {
                this.G23 = egret.localStorage.getItem("t23");
            }
            else {
                this.G23 = "0";
            }
            console.log(this.G23);
            console.log("t23");
            var x23 = (parseInt(this.G23) + 1).toString();
            egret.localStorage.setItem("t23", x23);
        }
        else if (this.s == 44) {
            if (egret.localStorage.getItem("t24")) {
                this.G24 = egret.localStorage.getItem("t24");
            }
            else {
                this.G24 = "0";
            }
            console.log(this.G24);
            console.log("t24");
            var x24 = (parseInt(this.G24) + 1).toString();
            egret.localStorage.setItem("t24", x24);
        }
        else if (this.s == 45) {
            if (egret.localStorage.getItem("t25")) {
                this.G25 = egret.localStorage.getItem("t25");
            }
            else {
                this.G25 = "0";
            }
            console.log(this.G25);
            console.log("t25");
            var x25 = (parseInt(this.G25) + 1).toString();
            egret.localStorage.setItem("t25", x25);
        }
    };
    ThirdScene.prototype.Move2 = function (event) {
        this.spr.TouchMove(this.t2); //调用TweenMove类中的动作函数
        //egret.localStorage.clear();	
        if (this.s == 21) {
            if (egret.localStorage.getItem("t1")) {
                this.G1 = egret.localStorage.getItem("t1");
            }
            else {
                this.G1 = "0";
            }
            console.log(this.G1);
            console.log("t1");
            var x1 = (parseInt(this.G1) + 1).toString();
            egret.localStorage.setItem("t1", x1);
        }
        else if (this.s == 22) {
            if (egret.localStorage.getItem("t2")) {
                this.G2 = egret.localStorage.getItem("t2");
            }
            else {
                this.G2 = "0";
            }
            console.log(this.G2);
            console.log("t2");
            var x2 = (parseInt(this.G2) + 1).toString();
            egret.localStorage.setItem("t2", x2);
        }
        else if (this.s == 23) {
            if (egret.localStorage.getItem("t3")) {
                this.G3 = egret.localStorage.getItem("t3");
            }
            else {
                this.G3 = "0";
            }
            console.log(this.G3);
            console.log("t3");
            var x3 = (parseInt(this.G3) + 1).toString();
            egret.localStorage.setItem("t3", x3);
        }
        else if (this.s == 24) {
            if (egret.localStorage.getItem("t4")) {
                this.G4 = egret.localStorage.getItem("t4");
            }
            else {
                this.G4 = "0";
            }
            console.log(this.G4);
            console.log("t4");
            var x4 = (parseInt(this.G4) + 1).toString();
            egret.localStorage.setItem("t4", x4);
        }
        else if (this.s == 25) {
            if (egret.localStorage.getItem("t5")) {
                this.G5 = egret.localStorage.getItem("t5");
            }
            else {
                this.G5 = "0";
            }
            console.log(this.G5);
            console.log("t5");
            var x5 = (parseInt(this.G5) + 1).toString();
            egret.localStorage.setItem("t5", x5);
        }
        else if (this.s == 26) {
            if (egret.localStorage.getItem("t6")) {
                this.G6 = egret.localStorage.getItem("t6");
            }
            else {
                this.G6 = "0";
            }
            console.log(this.G6);
            console.log("t6");
            var x6 = (parseInt(this.G6) + 1).toString();
            egret.localStorage.setItem("t6", x6);
        }
        else if (this.s == 27) {
            if (egret.localStorage.getItem("t7")) {
                this.G7 = egret.localStorage.getItem("t7");
            }
            else {
                this.G7 = "0";
            }
            console.log(this.G7);
            console.log("t7");
            var x7 = (parseInt(this.G7) + 1).toString();
            egret.localStorage.setItem("t7", x7);
        }
        else if (this.s == 28) {
            if (egret.localStorage.getItem("t8")) {
                this.G8 = egret.localStorage.getItem("t8");
            }
            else {
                this.G8 = "0";
            }
            console.log(this.G8);
            console.log("t8");
            var x8 = (parseInt(this.G8) + 1).toString();
            egret.localStorage.setItem("t8", x8);
        }
        else if (this.s == 29) {
            if (egret.localStorage.getItem("t9")) {
                this.G9 = egret.localStorage.getItem("t9");
            }
            else {
                this.G9 = "0";
            }
            console.log(this.G9);
            console.log("t9");
            var x9 = (parseInt(this.G9) + 1).toString();
            egret.localStorage.setItem("t9", x9);
        }
        else if (this.s == 30) {
            if (egret.localStorage.getItem("t10")) {
                this.G10 = egret.localStorage.getItem("t10");
            }
            else {
                this.G10 = "0";
            }
            console.log(this.G10);
            console.log("t10");
            var x10 = (parseInt(this.G10) + 1).toString();
            egret.localStorage.setItem("t10", x10);
        }
        else if (this.s == 31) {
            if (egret.localStorage.getItem("t11")) {
                this.G11 = egret.localStorage.getItem("t11");
            }
            else {
                this.G11 = "0";
            }
            console.log(this.G11);
            console.log("t11");
            var x11 = (parseInt(this.G11) + 1).toString();
            egret.localStorage.setItem("t11", x11);
        }
        else if (this.s == 32) {
            if (egret.localStorage.getItem("t12")) {
                this.G12 = egret.localStorage.getItem("t12");
            }
            else {
                this.G12 = "0";
            }
            console.log(this.G12);
            console.log("t12");
            var x12 = (parseInt(this.G12) + 1).toString();
            egret.localStorage.setItem("t12", x12);
        }
        else if (this.s == 33) {
            if (egret.localStorage.getItem("t13")) {
                this.G13 = egret.localStorage.getItem("t13");
            }
            else {
                this.G13 = "0";
            }
            console.log(this.G13);
            console.log("t13");
            var x13 = (parseInt(this.G13) + 1).toString();
            egret.localStorage.setItem("t13", x13);
        }
        else if (this.s == 34) {
            if (egret.localStorage.getItem("t14")) {
                this.G14 = egret.localStorage.getItem("t14");
            }
            else {
                this.G14 = "0";
            }
            console.log(this.G14);
            console.log("t14");
            var x14 = (parseInt(this.G14) + 1).toString();
            egret.localStorage.setItem("t14", x14);
        }
        else if (this.s == 35) {
            if (egret.localStorage.getItem("t15")) {
                this.G15 = egret.localStorage.getItem("t15");
            }
            else {
                this.G15 = "0";
            }
            console.log(this.G15);
            console.log("t15");
            var x15 = (parseInt(this.G15) + 1).toString();
            egret.localStorage.setItem("t15", x15);
        }
        else if (this.s == 36) {
            if (egret.localStorage.getItem("t16")) {
                this.G16 = egret.localStorage.getItem("t16");
            }
            else {
                this.G16 = "0";
            }
            console.log(this.G16);
            console.log("t16");
            var x16 = (parseInt(this.G16) + 1).toString();
            egret.localStorage.setItem("t16", x16);
        }
        else if (this.s == 37) {
            if (egret.localStorage.getItem("t17")) {
                this.G17 = egret.localStorage.getItem("t17");
            }
            else {
                this.G17 = "0";
            }
            console.log(this.G17);
            console.log("t17");
            var x17 = (parseInt(this.G17) + 1).toString();
            egret.localStorage.setItem("t17", x17);
        }
        else if (this.s == 38) {
            if (egret.localStorage.getItem("t18")) {
                this.G18 = egret.localStorage.getItem("t18");
            }
            else {
                this.G18 = "0";
            }
            console.log(this.G18);
            console.log("t18");
            var x18 = (parseInt(this.G18) + 1).toString();
            egret.localStorage.setItem("t18", x18);
        }
        else if (this.s == 39) {
            if (egret.localStorage.getItem("t19")) {
                this.G19 = egret.localStorage.getItem("t19");
            }
            else {
                this.G19 = "0";
            }
            console.log(this.G19);
            console.log("t19");
            var x19 = (parseInt(this.G19) + 1).toString();
            egret.localStorage.setItem("t19", x19);
        }
        else if (this.s == 40) {
            if (egret.localStorage.getItem("t20")) {
                this.G20 = egret.localStorage.getItem("t20");
            }
            else {
                this.G20 = "0";
            }
            console.log(this.G20);
            console.log("t20");
            var x20 = (parseInt(this.G20) + 1).toString();
            egret.localStorage.setItem("t20", x20);
        }
        else if (this.s == 41) {
            if (egret.localStorage.getItem("t21")) {
                this.G21 = egret.localStorage.getItem("t21");
            }
            else {
                this.G21 = "0";
            }
            console.log(this.G21);
            console.log("t21");
            var x21 = (parseInt(this.G21) + 1).toString();
            egret.localStorage.setItem("t21", x21);
        }
        else if (this.s == 42) {
            if (egret.localStorage.getItem("t22")) {
                this.G22 = egret.localStorage.getItem("t22");
            }
            else {
                this.G22 = "0";
            }
            console.log(this.G22);
            console.log("t22");
            var x22 = (parseInt(this.G22) + 1).toString();
            egret.localStorage.setItem("t22", x22);
        }
        else if (this.s == 43) {
            if (egret.localStorage.getItem("t23")) {
                this.G23 = egret.localStorage.getItem("t23");
            }
            else {
                this.G23 = "0";
            }
            console.log(this.G23);
            console.log("t23");
            var x23 = (parseInt(this.G23) + 1).toString();
            egret.localStorage.setItem("t23", x23);
        }
        else if (this.s == 44) {
            if (egret.localStorage.getItem("t24")) {
                this.G24 = egret.localStorage.getItem("t24");
            }
            else {
                this.G24 = "0";
            }
            console.log(this.G24);
            console.log("t24");
            var x24 = (parseInt(this.G24) + 1).toString();
            egret.localStorage.setItem("t24", x24);
        }
        else if (this.s == 45) {
            if (egret.localStorage.getItem("t25")) {
                this.G25 = egret.localStorage.getItem("t25");
            }
            else {
                this.G25 = "0";
            }
            console.log(this.G25);
            console.log("t25");
            var x25 = (parseInt(this.G25) + 1).toString();
            egret.localStorage.setItem("t25", x25);
        }
    };
    return ThirdScene;
}(Scene));
__reflect(ThirdScene.prototype, "ThirdScene");
//# sourceMappingURL=ThirdScene.js.map