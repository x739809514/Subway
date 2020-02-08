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
//仓库页面，仓库中存放当前采集到的零件个数
var WareHouse = (function (_super) {
    __extends(WareHouse, _super);
    function WareHouse() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/CangKu.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.Label, _this);
        return _this;
    }
    WareHouse.prototype.onComplete = function () {
        this.Close.touchEnabled = true;
        this.Close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClose, this);
    };
    WareHouse.prototype.OnClose = function (event) {
        SceneManager.Instance.closeScene();
    };
    WareHouse.prototype.Label = function () {
        this.r1 = egret.localStorage.getItem("g1"); //获取本地数据
        this.r2 = egret.localStorage.getItem("g2");
        this.r3 = egret.localStorage.getItem("g3");
        this.r4 = egret.localStorage.getItem("g4");
        this.r5 = egret.localStorage.getItem("g5");
        this.r6 = egret.localStorage.getItem("g6");
        this.r7 = egret.localStorage.getItem("g7");
        this.r8 = egret.localStorage.getItem("g8");
        this.r9 = egret.localStorage.getItem("g9");
        this.r10 = egret.localStorage.getItem("g10");
        this.r11 = egret.localStorage.getItem("g11");
        this.r12 = egret.localStorage.getItem("g12");
        this.r13 = egret.localStorage.getItem("g13");
        this.r14 = egret.localStorage.getItem("g14");
        this.r15 = egret.localStorage.getItem("g15");
        this.r16 = egret.localStorage.getItem("g16");
        this.r17 = egret.localStorage.getItem("g17");
        this.r18 = egret.localStorage.getItem("g18");
        var L1 = new egret.TextField(); //将获取到的数据添加到对应零件下。。。本来应该通过循环实现，但是不知为何会报错
        L1.text = this.r1;
        this.addChild(L1);
        L1.x = 113.31;
        L1.y = 304.22;
        var L2 = new egret.TextField();
        L2.text = this.r2;
        this.addChild(L2);
        L2.x = 313.03;
        L2.y = 304.22;
        var L3 = new egret.TextField();
        L3.text = this.r3;
        this.addChild(L3);
        L3.x = 517.25;
        L3.y = 304.22;
        var L4 = new egret.TextField();
        L4.text = this.r4;
        this.addChild(L4);
        L4.x = 113.31;
        L4.y = 468.77;
        var L5 = new egret.TextField();
        L5.text = this.r5;
        this.addChild(L5);
        L5.x = 313.03;
        L5.y = 468.77;
        var L6 = new egret.TextField();
        L6.text = this.r6;
        this.addChild(L6);
        L6.x = 517.25;
        L6.y = 468.77;
        var L7 = new egret.TextField();
        L7.text = this.r7;
        this.addChild(L7);
        L7.x = 113.31;
        L7.y = 626.93;
        var L8 = new egret.TextField();
        L8.text = this.r8;
        this.addChild(L8);
        L8.x = 313.03;
        L8.y = 626.93;
        var L9 = new egret.TextField();
        L9.text = this.r9;
        this.addChild(L9);
        L9.x = 517.25;
        L9.y = 626.93;
        var L10 = new egret.TextField();
        L10.text = this.r10;
        this.addChild(L10);
        L10.x = 113.31;
        L10.y = 784.52;
        var L11 = new egret.TextField();
        L11.text = this.r11;
        this.addChild(L11);
        L11.x = 313.03;
        L11.y = 784.52;
        var L12 = new egret.TextField();
        L12.text = this.r12;
        this.addChild(L12);
        L12.x = 517.25;
        L12.y = 784.52;
        var L13 = new egret.TextField();
        L13.text = this.r13;
        this.addChild(L13);
        L13.x = 113.31;
        L13.y = 949.66;
        var L14 = new egret.TextField();
        L14.text = this.r14;
        this.addChild(L14);
        L14.x = 313.03;
        L14.y = 949.66;
        var L15 = new egret.TextField();
        L15.text = this.r15;
        this.addChild(L15);
        L15.x = 517.25;
        L15.y = 949.66;
        var L16 = new egret.TextField();
        L16.text = this.r16;
        this.addChild(L16);
        L16.x = 113.31;
        L16.y = 1092.36;
        var L17 = new egret.TextField();
        L17.text = this.r17;
        this.addChild(L17);
        L17.x = 313.03;
        L17.y = 1092.36;
        var L18 = new egret.TextField();
        L18.text = this.r18;
        this.addChild(L18);
        L18.x = 517.25;
        L18.y = 1092.36;
    };
    WareHouse.prototype.Finish = function () {
        this.R1 = parseInt(egret.localStorage.getItem("g1"));
        this.R2 = parseInt(egret.localStorage.getItem("g2"));
        this.R3 = parseInt(egret.localStorage.getItem("g3"));
        this.R4 = parseInt(egret.localStorage.getItem("g4"));
        this.R5 = parseInt(egret.localStorage.getItem("g5"));
        this.R6 = parseInt(egret.localStorage.getItem("g6"));
        this.R7 = parseInt(egret.localStorage.getItem("g7"));
        this.R8 = parseInt(egret.localStorage.getItem("g8"));
        this.R9 = parseInt(egret.localStorage.getItem("g9"));
        this.R10 = parseInt(egret.localStorage.getItem("g10"));
        this.R11 = parseInt(egret.localStorage.getItem("g11"));
        this.R12 = parseInt(egret.localStorage.getItem("g12"));
        this.R13 = parseInt(egret.localStorage.getItem("g13"));
        this.R14 = parseInt(egret.localStorage.getItem("g14"));
        this.R15 = parseInt(egret.localStorage.getItem("g15"));
        this.R16 = parseInt(egret.localStorage.getItem("g16"));
        this.R17 = parseInt(egret.localStorage.getItem("g17"));
        this.R18 = parseInt(egret.localStorage.getItem("g18"));
        if (this.R1 >= 1 && this.R2 >= 1 && this.R3 >= 1 && this.R4 >= 1 && this.R5 >= 1 && this.R6 >= 1 && this.R7 >= 1 && this.R8 >= 1 && this.R9 >= 1 && this.R10 >= 1 && this.R11 >= 1 && this.R12 >= 1 && this.R13 >= 1 && this.R14 >= 1 && this.R15 >= 1 && this.R16 >= 1 && this.R17 >= 1 && this.R18 >= 1) {
            return true;
        }
        else {
            return false;
        }
    };
    return WareHouse;
}(Scene));
__reflect(WareHouse.prototype, "WareHouse");
//# sourceMappingURL=WareHouse.js.map