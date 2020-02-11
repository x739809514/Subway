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
// TypeScript file
var EditText = (function (_super) {
    __extends(EditText, _super);
    function EditText() {
        var _this = _super.call(this) || this;
        _this.background = new eui.Image();
        _this.myEditableText = new eui.EditableText();
        //指定图片素材，这里使用上面的图片，并放入相应文件夹下    
        _this.background.source = "resource/assets/CheckBox/checkbox_unselect.png";
        //指定图片的九宫格，我们可以复习一下前面章节的内容
        _this.background.scale9Grid = new egret.Rectangle(1.5, 1.5, 20, 20);
        //指定其宽和高，用来当做背景.
        _this.background.width = 400;
        _this.background.height = 50;
        //this.background.x=400;
        _this.background.y = 400;
        //将背景添加到显示列表
        _this.addChild(_this.background);
        //指定默认文本，用户可以自己输入，也可以将其删除
        _this.myEditableText.text = "my EditableText";
        //指定文本的颜色。
        _this.myEditableText.textColor = 0x2233cc;
        //指定我们的文本输入框的宽和高    
        _this.myEditableText.width = _this.background.width;
        _this.myEditableText.height = _this.background.height;
        //设置我们的文本左边距为零
        _this.myEditableText.left = 0;
        _this.myEditableText.displayAsPassword = false;
        //表示文本字段是否按单词换行。如果值为 true，则该文本字段按单词换行；反之则该文本字段按字符换行。
        _this.myEditableText.wordWrap = true;
        //添加监听，监听用户的输入
        _this.myEditableText.addEventListener(egret.Event.CHANGE, _this.onChang, _this);
        // this.myEditableText.x=400;
        _this.myEditableText.y = 400;
        //将他添加到显示列表
        _this.addChild(_this.myEditableText);
        return _this;
    }
    EditText.prototype.onChang = function (e) {
        egret.log(e.target.text);
    };
    return EditText;
}(eui.Group));
__reflect(EditText.prototype, "EditText");
//# sourceMappingURL=EditText.js.map