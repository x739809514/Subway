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
var WareHouse_2 = (function (_super) {
    __extends(WareHouse_2, _super);
    function WareHouse_2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/ware2.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.Label, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.GetBitMap, _this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("TrainGear2");
        return _this;
    }
    WareHouse_2.prototype.onComplete = function () {
        this.Close.touchEnabled = true;
        this.Close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClose, this);
    };
    WareHouse_2.prototype.OnClose = function (event) {
        SceneManager.Instance.closeScene();
    };
    WareHouse_2.prototype.Matrix = function (s) {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        s.filters = [colorFlilter];
    };
    WareHouse_2.prototype.GetBitMap = function () {
        var BitMap1 = new egret.Bitmap();
        BitMap1.texture = RES.getRes("21");
        this.addChild(BitMap1);
        BitMap1.x = 64;
        BitMap1.y = 187.67;
        BitMap1.scaleX = 0.4;
        BitMap1.scaleY = 0.4;
        if (!this.i1) {
            this.Matrix(BitMap1);
        }
        var BitMap2 = new egret.Bitmap();
        BitMap2.texture = RES.getRes("22");
        this.addChild(BitMap2);
        BitMap2.x = 208;
        BitMap2.y = 187.67;
        BitMap2.scaleX = 0.4;
        BitMap2.scaleY = 0.4;
        if (!this.i2) {
            this.Matrix(BitMap2);
        }
        var BitMap3 = new egret.Bitmap();
        BitMap3.texture = RES.getRes("23");
        this.addChild(BitMap3);
        BitMap3.x = 352;
        BitMap3.y = 187.67;
        BitMap3.scaleX = 0.4;
        BitMap3.scaleY = 0.4;
        if (!this.i3) {
            this.Matrix(BitMap3);
        }
        var BitMap4 = new egret.Bitmap();
        BitMap4.texture = RES.getRes("24");
        this.addChild(BitMap4);
        BitMap4.x = 496;
        BitMap4.y = 187.67;
        BitMap4.scaleX = 0.4;
        BitMap4.scaleY = 0.4;
        if (!this.i4) {
            this.Matrix(BitMap4);
        }
        var BitMap5 = new egret.Bitmap();
        BitMap5.texture = RES.getRes("25");
        this.addChild(BitMap5);
        BitMap5.x = 64;
        BitMap5.y = 304.64;
        BitMap5.scaleX = 0.4;
        BitMap5.scaleY = 0.4;
        if (!this.i5) {
            this.Matrix(BitMap5);
        }
        var BitMap6 = new egret.Bitmap();
        BitMap6.texture = RES.getRes("26");
        this.addChild(BitMap6);
        BitMap6.x = 208;
        BitMap6.y = 304.64;
        BitMap6.scaleX = 0.4;
        BitMap6.scaleY = 0.4;
        if (!this.i6) {
            this.Matrix(BitMap6);
        }
        var BitMap7 = new egret.Bitmap();
        BitMap7.texture = RES.getRes("27");
        this.addChild(BitMap7);
        BitMap7.x = 352;
        BitMap7.y = 304.64;
        BitMap7.scaleX = 0.4;
        BitMap7.scaleY = 0.4;
        if (!this.i7) {
            this.Matrix(BitMap7);
        }
        var BitMap8 = new egret.Bitmap();
        BitMap8.texture = RES.getRes("28");
        this.addChild(BitMap8);
        BitMap8.x = 496;
        BitMap8.y = 304.64;
        BitMap8.scaleX = 0.4;
        BitMap8.scaleY = 0.4;
        if (!this.i8) {
            this.Matrix(BitMap8);
        }
        var BitMap9 = new egret.Bitmap();
        BitMap9.texture = RES.getRes("29");
        this.addChild(BitMap9);
        BitMap9.x = 64;
        BitMap9.y = 420.7;
        BitMap9.scaleX = 0.4;
        BitMap9.scaleY = 0.4;
        if (!this.i9) {
            this.Matrix(BitMap9);
        }
        var BitMap10 = new egret.Bitmap();
        BitMap10.texture = RES.getRes("30");
        this.addChild(BitMap10);
        BitMap10.x = 208;
        BitMap10.y = 420.7;
        BitMap10.scaleX = 0.4;
        BitMap10.scaleY = 0.4;
        if (!this.i10) {
            this.Matrix(BitMap10);
        }
        var BitMap11 = new egret.Bitmap();
        BitMap11.texture = RES.getRes("31");
        this.addChild(BitMap11);
        BitMap11.x = 352;
        BitMap11.y = 420.7;
        BitMap11.scaleX = 0.4;
        BitMap11.scaleY = 0.4;
        if (!this.i11) {
            this.Matrix(BitMap11);
        }
        var BitMap12 = new egret.Bitmap();
        BitMap12.texture = RES.getRes("32");
        this.addChild(BitMap12);
        BitMap12.x = 496;
        BitMap12.y = 420.7;
        BitMap12.scaleX = 0.4;
        BitMap12.scaleY = 0.4;
        if (!this.i12) {
            this.Matrix(BitMap12);
        }
        var BitMap13 = new egret.Bitmap();
        BitMap13.texture = RES.getRes("33");
        this.addChild(BitMap13);
        BitMap13.x = 64;
        BitMap13.y = 530.72;
        BitMap13.scaleX = 0.4;
        BitMap13.scaleY = 0.4;
        if (!this.i13) {
            this.Matrix(BitMap13);
        }
        var BitMap14 = new egret.Bitmap();
        BitMap14.texture = RES.getRes("34");
        this.addChild(BitMap14);
        BitMap14.x = 208;
        BitMap14.y = 530.72;
        BitMap14.scaleX = 0.4;
        BitMap14.scaleY = 0.4;
        if (!this.i14) {
            this.Matrix(BitMap14);
        }
        var BitMap15 = new egret.Bitmap();
        BitMap15.texture = RES.getRes("35");
        this.addChild(BitMap15);
        BitMap15.x = 352;
        BitMap15.y = 530.72;
        BitMap15.scaleX = 0.4;
        BitMap15.scaleY = 0.4;
        if (!this.i15) {
            this.Matrix(BitMap15);
        }
        var BitMap16 = new egret.Bitmap();
        BitMap16.texture = RES.getRes("36");
        this.addChild(BitMap16);
        BitMap16.x = 496;
        BitMap16.y = 530.72;
        BitMap16.scaleX = 0.4;
        BitMap16.scaleY = 0.4;
        if (!this.i16) {
            this.Matrix(BitMap16);
        }
        var BitMap17 = new egret.Bitmap();
        BitMap17.texture = RES.getRes("37");
        this.addChild(BitMap17);
        BitMap17.x = 64;
        BitMap17.y = 654.36;
        BitMap17.scaleX = 0.4;
        BitMap17.scaleY = 0.4;
        if (!this.i17) {
            this.Matrix(BitMap17);
        }
        var BitMap18 = new egret.Bitmap();
        BitMap18.texture = RES.getRes("38");
        this.addChild(BitMap18);
        BitMap18.x = 208;
        BitMap18.y = 654.36;
        BitMap18.scaleX = 0.4;
        BitMap18.scaleY = 0.4;
        if (!this.i18) {
            this.Matrix(BitMap18);
        }
        var BitMap19 = new egret.Bitmap();
        BitMap19.texture = RES.getRes("39");
        this.addChild(BitMap19);
        BitMap19.x = 352;
        BitMap19.y = 654.36;
        BitMap19.scaleX = 0.4;
        BitMap19.scaleY = 0.4;
        if (!this.i19) {
            this.Matrix(BitMap19);
        }
        var BitMap20 = new egret.Bitmap();
        BitMap18.texture = RES.getRes("40");
        this.addChild(BitMap20);
        BitMap20.x = 496;
        BitMap20.y = 654.36;
        BitMap20.scaleX = 0.4;
        BitMap20.scaleY = 0.4;
        if (!this.i20) {
            this.Matrix(BitMap20);
        }
        var BitMap21 = new egret.Bitmap();
        BitMap21.texture = RES.getRes("41");
        this.addChild(BitMap21);
        BitMap21.x = 64;
        BitMap21.y = 780.11;
        BitMap21.scaleX = 0.4;
        BitMap21.scaleY = 0.4;
        if (!this.i21) {
            this.Matrix(BitMap21);
        }
        var BitMap22 = new egret.Bitmap();
        BitMap22.texture = RES.getRes("42");
        this.addChild(BitMap22);
        BitMap22.x = 208;
        BitMap22.y = 780.11;
        BitMap22.scaleX = 0.4;
        BitMap22.scaleY = 0.4;
        if (!this.i22) {
            this.Matrix(BitMap22);
        }
        var BitMap23 = new egret.Bitmap();
        BitMap23.texture = RES.getRes("43");
        this.addChild(BitMap23);
        BitMap23.x = 352;
        BitMap23.y = 780.11;
        BitMap23.scaleX = 0.4;
        BitMap23.scaleY = 0.4;
        if (!this.i23) {
            this.Matrix(BitMap23);
        }
        var BitMap24 = new egret.Bitmap();
        BitMap24.texture = RES.getRes("44");
        this.addChild(BitMap24);
        BitMap24.x = 496;
        BitMap24.y = 780.11;
        BitMap24.scaleX = 0.4;
        BitMap24.scaleY = 0.4;
        if (!this.i24) {
            this.Matrix(BitMap24);
        }
        var BitMap25 = new egret.Bitmap();
        BitMap25.texture = RES.getRes("45");
        this.addChild(BitMap25);
        BitMap25.x = 64;
        BitMap25.y = 891.63;
        BitMap25.scaleX = 0.4;
        BitMap25.scaleY = 0.4;
        if (!this.i25) {
            this.Matrix(BitMap25);
        }
    };
    WareHouse_2.prototype.Label = function () {
        this.i1 = egret.localStorage.getItem("t1"); //获取本地数据
        this.i2 = egret.localStorage.getItem("t2");
        this.i3 = egret.localStorage.getItem("t3");
        this.i4 = egret.localStorage.getItem("t4");
        this.i5 = egret.localStorage.getItem("t5");
        this.i6 = egret.localStorage.getItem("t6");
        this.i7 = egret.localStorage.getItem("t7");
        this.i8 = egret.localStorage.getItem("t8");
        this.i9 = egret.localStorage.getItem("t9");
        this.i10 = egret.localStorage.getItem("t10");
        this.i11 = egret.localStorage.getItem("t11");
        this.i12 = egret.localStorage.getItem("t12");
        this.i13 = egret.localStorage.getItem("t13");
        this.i14 = egret.localStorage.getItem("t14");
        this.i15 = egret.localStorage.getItem("t15");
        this.i16 = egret.localStorage.getItem("t16");
        this.i17 = egret.localStorage.getItem("t17");
        this.i18 = egret.localStorage.getItem("t18");
        this.i19 = egret.localStorage.getItem("t19");
        this.i20 = egret.localStorage.getItem("t20");
        this.i21 = egret.localStorage.getItem("t21");
        this.i22 = egret.localStorage.getItem("t22");
        this.i23 = egret.localStorage.getItem("t23");
        this.i24 = egret.localStorage.getItem("t24");
        this.i25 = egret.localStorage.getItem("t25");
        var L1 = new egret.TextField(); //将获取到的数据添加到对应零件下。。。本来应该通过循环实现，但是不知为何会报错
        L1.text = this.i1;
        this.addChild(L1);
        L1.x = 95.5;
        L1.y = 274.64;
        var L2 = new egret.TextField();
        L2.text = this.i2;
        this.addChild(L2);
        L2.x = 239.5;
        L2.y = 274.64;
        var L3 = new egret.TextField();
        L3.text = this.i3;
        this.addChild(L3);
        L3.x = 383.5;
        L3.y = 274.64;
        var L4 = new egret.TextField();
        L4.text = this.i4;
        this.addChild(L4);
        L4.x = 527.5;
        L4.y = 274.64;
        var L5 = new egret.TextField();
        L5.text = this.i5;
        this.addChild(L5);
        L5.x = 95.5;
        L5.y = 390.7;
        var L6 = new egret.TextField();
        L6.text = this.i6;
        this.addChild(L6);
        L6.x = 239.5;
        L6.y = 390.7;
        var L7 = new egret.TextField();
        L7.text = this.i7;
        this.addChild(L7);
        L7.x = 383.5;
        L7.y = 390.7;
        var L8 = new egret.TextField();
        L8.text = this.i8;
        this.addChild(L8);
        L8.x = 527.5;
        L8.y = 390.7;
        var L9 = new egret.TextField();
        L9.text = this.i9;
        this.addChild(L9);
        L9.x = 95.5;
        L9.y = 500.72;
        var L10 = new egret.TextField();
        L10.text = this.i10;
        this.addChild(L10);
        L10.x = 239.5;
        L10.y = 500.72;
        var L11 = new egret.TextField();
        L11.text = this.i11;
        this.addChild(L11);
        L11.x = 383.5;
        L11.y = 500.72;
        var L12 = new egret.TextField();
        L12.text = this.i12;
        this.addChild(L12);
        L12.x = 527.5;
        L12.y = 500.72;
        var L13 = new egret.TextField();
        L13.text = this.i13;
        this.addChild(L13);
        L13.x = 95.5;
        L13.y = 624.36;
        var L14 = new egret.TextField();
        L14.text = this.i14;
        this.addChild(L14);
        L14.x = 239.5;
        L14.y = 624.36;
        var L15 = new egret.TextField();
        L15.text = this.i15;
        this.addChild(L15);
        L15.x = 383.5;
        L15.y = 624.36;
        var L16 = new egret.TextField();
        L16.text = this.i16;
        this.addChild(L16);
        L16.x = 527.5;
        L16.y = 624.36;
        var L17 = new egret.TextField();
        L17.text = this.i17;
        this.addChild(L17);
        L17.x = 95.5;
        L17.y = 740.11;
        var L18 = new egret.TextField();
        L18.text = this.i18;
        this.addChild(L18);
        L18.x = 239.5;
        L18.y = 740.11;
        var L19 = new egret.TextField();
        L19.text = this.i19;
        this.addChild(L19);
        L19.x = 383.5;
        L19.y = 740.11;
        var L20 = new egret.TextField();
        L20.text = this.i20;
        this.addChild(L20);
        L20.x = 527.5;
        L20.y = 740.11;
        var L21 = new egret.TextField();
        L21.text = this.i21;
        this.addChild(L21);
        L21.x = 95.5;
        L21.y = 861.63;
        var L22 = new egret.TextField();
        L22.text = this.i22;
        this.addChild(L22);
        L22.x = 239.5;
        L22.y = 861.63;
        var L23 = new egret.TextField();
        L23.text = this.i23;
        this.addChild(L23);
        L23.x = 383.5;
        L23.y = 861.63;
        var L24 = new egret.TextField();
        L24.text = this.i24;
        this.addChild(L24);
        L24.x = 527.5;
        L24.y = 861.63;
        var L25 = new egret.TextField();
        L25.text = this.i25;
        this.addChild(L25);
        L25.x = 95.5;
        L25.y = 982.63;
    };
    return WareHouse_2;
}(Scene));
__reflect(WareHouse_2.prototype, "WareHouse_2");
//# sourceMappingURL=WareHouse_2.js.map