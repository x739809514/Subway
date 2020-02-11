// TypeScript file
// TypeScript file
class EditText extends eui.Group {
    public constructor () {
        super();
         //指定图片素材，这里使用上面的图片，并放入相应文件夹下    
        this.background.source = "resource/assets/CheckBox/checkbox_unselect.png";  
        //指定图片的九宫格，我们可以复习一下前面章节的内容
        this.background.scale9Grid = new egret.Rectangle(1.5,1.5,20,20); 
        //指定其宽和高，用来当做背景.
        this.background.width = 400;                                       
        this.background.height = 50;
        //this.background.x=400;
        this.background.y=400;
        //将背景添加到显示列表
        this.addChild(this.background);                                    
        //指定默认文本，用户可以自己输入，也可以将其删除
        this.myEditableText.text = "my EditableText";
        //指定文本的颜色。
        this.myEditableText.textColor = 0x2233cc;                          
        //指定我们的文本输入框的宽和高    
        this.myEditableText.width = this.background.width;                 
        this.myEditableText.height = this.background.height; 
        //设置我们的文本左边距为零
        this.myEditableText.left = 0;            
        this.myEditableText.displayAsPassword = false; 
        //表示文本字段是否按单词换行。如果值为 true，则该文本字段按单词换行；反之则该文本字段按字符换行。
        this.myEditableText.wordWrap = true;                                     
        //添加监听，监听用户的输入
        this.myEditableText.addEventListener(egret.Event.CHANGE,this.onChang,this);
        // this.myEditableText.x=400;
        this.myEditableText.y=400;                          
        //将他添加到显示列表
        this.addChild(this.myEditableText);          
    }
    public background:eui.Image = new eui.Image();
    public myEditableText:eui.EditableText = new eui.EditableText();

    public onChang(e:egret.Event){
        egret.log(e.target.text);
    }


}