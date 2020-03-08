class json extends egret.DisplayObjectContainer{
    public arr:string;
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
    }
    public onAddToStage(event:egret.Event){
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.Data,this)
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("data");
    }
    public Data(){
        var data=RES.getRes("Trip_json");
        console.log(data['result']);

    }
}