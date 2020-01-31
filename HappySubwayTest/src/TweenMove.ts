// TypeScript file
//动作类，存放要执行的动作，在主类中实例化
class TweenMove extends egret.DisplayObjectContainer{
    constructor() {
        super();
    }
    //Tween缓动动画
    public TouchMove(s:egret.Bitmap):void{
        var tw2=egret.Tween.get(s);
        tw2.to({x:250,y:800,alpha:0},700);  //移动到坐标（250，800）的位置，透明度渐变为0，控制时长700ms
    }
}