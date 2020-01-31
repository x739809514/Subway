// TypeScript file
//创建一个场景管理类
class SceneManager{
    private static _Manager:SceneManager;
    public static get Instance(){
        if(SceneManager._Manager==null){
            SceneManager._Manager=new SceneManager();
        }
        return SceneManager._Manager;
    }
    public constructor(){}

    public rootLayer:eui.UILayer;//起始场景
    private current_Scene:Scene;//当前场景
    private pop_Scene:Scene;//要载入的场景
    //变换场景函数
    public changeScene(s:Scene){
        if(this.current_Scene){
            this.rootLayer.removeChild(this.current_Scene);
            this.current_Scene=null;
        }
        this.rootLayer.addChild(s);
        this.current_Scene=s;
    }
    //载入场景函数
    public pushScene(s:Scene){
        this.closeScene();
        if(!this.pop_Scene){
            this.rootLayer.addChild(s);
            this.pop_Scene=s;
        }
    }
    //关闭场景函数
    public closeScene(){
        if(this.pop_Scene){
            this.rootLayer.removeChild(this.pop_Scene);
            this.pop_Scene=null;
        }
    }
}