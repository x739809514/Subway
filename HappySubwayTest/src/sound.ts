// TypeScript file
//const main_music:string="resource/assets/data/sound/Music.mp3";
//const click_sound:string="resource/assets/data/sound/buttonclick.mp3";
//const right_sound:string="resource/assets/data/sound/right.mp3";
//const wrong_sound:string="resource/assets/data/sound/wrong.mp3";
//const typeWord_sound:string="resource/assets/data/sound/type_word.mp3";

enum SoundType{
    Click,
    Right,
    Wrong,
    TypeWord
}

class SoundManager{
    /* 单例模式，全局访问 */
    private static instance:SoundManager;
    public static get Instance():SoundManager{
        if(!SoundManager.instance){
            SoundManager.instance=new SoundManager();
        }
        return SoundManager.instance;
    }

    //播放音轨控制
    private soundChannel:egret.SoundChannel

    private bg_music:egret.Sound;
    private click_sound:egret.Sound;
    private Bubble_click_sound:egret.Sound;
    private wrong_sound:egret.Sound;
    private typeWord_sound:egret.Sound;


    /* 构造函数 */
    public constructor(){
        var sound:egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event:egret.Event) {
            sound.play();
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event:egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/Sound/back_sound.mp3");
        
        this.click_sound=new egret.Sound();
        this.click_sound.load("resource/assets/Sound/click.mp3");

        this.Bubble_click_sound=new egret.Sound();
        this.Bubble_click_sound.load("resource/assets/Sound/Bubble_click.mp3");

        // this.wrong_sound=new egret.Sound();
        // this.wrong_sound.load("resource/assets/data/sound/wrong.mp3");

        // this.typeWord_sound=new egret.Sound();
        // this.typeWord_sound.load("resource/assets/data/sound/type_word.mp3");
    }

    //播放背景音乐
    
    public PlayMusic():void{
        if(this.IsMusic&&this.bg_music)
        {
            this.soundChannel=this.bg_music.play(0,0);
        }
    }

    public StopMusic():void{
        if(this.soundChannel!=null)
        {
            this.soundChannel.stop();
        }
    }


    //播放音效，初步学习设计，后期更改更优方案
    public PlaySound(name:SoundType):void{
        if(!this.IsSound)
            return;
      switch(name)
      {
          case SoundType.Click: this.click_sound.play(0,1);break;
          case SoundType.Right:this.Bubble_click_sound.play(0,1);break;
          case SoundType.Wrong:this.wrong_sound.play(0,1);break;
          case SoundType.TypeWord:this.typeWord_sound.play(0,1);break;
      }
      
    }


    /**背景音乐播放状态保存 */
    public get IsMusic():boolean{
        let status=egret.localStorage.getItem("IsMusic");
        if(status==null||status=="")
            return true;
        else
            return status=="1";
    }

    public set IsMusic(value){
        if(value)
        {
            egret.localStorage.setItem("IsMusic","1");
            this.PlayMusic();
        }
        else
        {
            egret.localStorage.setItem("IsMusic","0");
            this.StopMusic();
        }
    }

    /**音效播放状态获取保存 */
    public get IsSound():boolean{
        let status=egret.localStorage.getItem("IsSound");
        if(status==null||status=="")
            return true;
        else
            return status=="1"
    }

    public set IsSound(value){
        if(value)
            egret.localStorage.setItem("IsSound","1");
        else
            egret.localStorage.setItem("IsSound","0");
    }

}
