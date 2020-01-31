// TypeScript file
class TweenMove extends egret.DisplayObjectContainer{
    constructor() {
        super();
        // this.addEventListener(egret.Event.ADDED_TO_STAGE,this.BitmapTest,this);
    }

    public TouchMove(s:egret.Bitmap):void{
        var tw2=egret.Tween.get(s);
        tw2.to({x:250,y:800},1000).call(function(){
            s.alpha=0;
        });
    }
}