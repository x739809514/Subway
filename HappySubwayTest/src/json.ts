// TypeScript file
class json extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    public onAddToStage(){
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.Data,this)
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("data");
    }
    public Data(){
        var data=RES.getRes("Trip_json");
        egret.localStorage.setItem('json',JSON.stringify(data['result']['page']['rows'][0]['in_station_name']));
        egret.localStorage.setItem('json2',JSON.stringify(data['result']['page']['total_count']));
        var data2=RES.getRes("User_json");
        egret.localStorage.setItem('id',JSON.stringify(data2['result']['user']['user_id']));
        egret.localStorage.setItem('yonghu',JSON.stringify(data2['result']['user']['user_name']));
    }
}