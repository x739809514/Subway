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
var progressBar = (function (_super) {
    __extends(progressBar, _super);
    function progressBar() {
        var _this = _super.call(this) || this;
        var exml = "<e:ProgressBar xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Skin>\n                    <e:Image id=\"thumb\" width=\"100%\" height=\"100%\" source=\"resource/thumb.png\" scale9Grid=\"1,1,4,4\"/>\n                    <e:Label id=\"labelDisplay\" textColor=\"0xffffff\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                </e:Skin>\n            </e:ProgressBar>";
        var clazz = EXML.parse(exml);
        var progressBar = new clazz();
        progressBar.width = 235.15;
        progressBar.height = 21.52;
        progressBar.minimum = 0;
        progressBar.maximum = 7;
        _this.addChild(progressBar);
        var add = 1;
        _this.addEventListener(egret.Event.ENTER_FRAME, function (e) {
            var Time = new Date();
            var date = Time.getDay();
            if (date) {
                progressBar.value += add;
                if (progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
                    add = -add;
                }
            }
        }, null);
        return _this;
    }
    return progressBar;
}(egret.Sprite));
__reflect(progressBar.prototype, "progressBar");
//# sourceMappingURL=ProgressBar.js.map