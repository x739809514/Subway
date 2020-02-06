// TypeScript file
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
var Tanchu2 = (function (_super) {
    __extends(Tanchu2, _super);
    function Tanchu2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/TanChu.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onComplete, _this);
        return _this;
    }
    Tanchu2.prototype.onComplete = function () {
        this.spr = new egret.Sprite();
        this.addChild(this.spr);
        this.spr.x = 0;
        this.spr.y = 0;
        this.spr.width = 640;
        this.spr.height = 1136;
        this.Back.touchEnabled = true;
        this.Back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
        //egret.localStorage.clear();
        this.everyDayLogin();
    };
    Tanchu2.prototype.onTapqiehuan = function () {
        SceneManager.Instance.closeScene();
    };
    //*******首登奖励********* */
    //*********************** */
    Tanchu2.prototype.setUserSetting = function (key, value) {
        if (value != null) {
            value = value.toString();
            value = encodeURI(value);
        }
        egret.localStorage.setItem(key, value);
    };
    Tanchu2.prototype.getUserSetting = function (key, value) {
        var val = egret.localStorage.getItem(key);
        if (val == null || '' == val) {
            if (null != value) {
                val = value;
            }
        }
        else {
            val = decodeURI(val);
            if (val == "true") {
                return true;
            }
            if (val == "false") {
                return false;
            }
        }
        return val;
    };
    Tanchu2.prototype.oneDayFunction = function (saveName) {
        var lastDay = this.getUserSetting(saveName, "");
        var today = new Date().getDate();
        var isSameDay = lastDay == today;
        if (!isSameDay) {
            this.setUserSetting(saveName, today);
            return true;
        }
        return false;
    };
    /**
   * 每日登陆领取设置
   */
    Tanchu2.prototype.everyDayLogin = function () {
        this.isFirst = this.oneDayFunction("isFirst");
        egret.log("是否是首次登陆？？？？" + this.isFirst);
        if (this.isFirst) {
            //是首次登陆
            this.initProgressBar();
        }
        else {
            this.saveProgressBar();
        }
    };
    Tanchu2.prototype.initProgressBar = function () {
        this.pBar = new eui.ProgressBar();
        this.pBar.maximum = 7; //设置进度条的最大值
        this.pBar.minimum = 0; //设置进度条的最小值
        this.pBar.width = 235.15;
        this.pBar.height = 21.52;
        this.pBar.x = 193.82;
        this.pBar.y = 177.5;
        this.addChild(this.pBar);
        this.pBar.value = parseInt(egret.localStorage.getItem("d1"));
        this.pBar.value += 1; //设置进度条的初始值
        var x1 = this.pBar.value.toString();
        egret.localStorage.setItem("d1", x1);
        if (this.pBar.value > 7) {
            this.pBar.value = 0;
        }
    };
    Tanchu2.prototype.saveProgressBar = function () {
        this.pBar = new eui.ProgressBar();
        this.pBar.maximum = 7; //设置进度条的最大值
        this.pBar.minimum = 0; //设置进度条的最小值
        this.pBar.width = 235.15;
        this.pBar.height = 21.52;
        this.pBar.x = 193.82;
        this.pBar.y = 177.5;
        this.addChild(this.pBar);
        var y = parseInt(egret.localStorage.getItem("d1"));
        this.pBar.value = y; //设置进度条的初始值
    };
    return Tanchu2;
}(Scene));
__reflect(Tanchu2.prototype, "Tanchu2");
//# sourceMappingURL=Tanchu2.js.map