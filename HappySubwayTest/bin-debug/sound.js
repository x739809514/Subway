// TypeScript file
//const main_music:string="resource/assets/data/sound/Music.mp3";
//const click_sound:string="resource/assets/data/sound/buttonclick.mp3";
//const right_sound:string="resource/assets/data/sound/right.mp3";
//const wrong_sound:string="resource/assets/data/sound/wrong.mp3";
//const typeWord_sound:string="resource/assets/data/sound/type_word.mp3";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundType;
(function (SoundType) {
    SoundType[SoundType["Click"] = 0] = "Click";
    SoundType[SoundType["Right"] = 1] = "Right";
    SoundType[SoundType["Wrong"] = 2] = "Wrong";
    SoundType[SoundType["TypeWord"] = 3] = "TypeWord";
})(SoundType || (SoundType = {}));
var SoundManager = (function () {
    /* 构造函数 */
    function SoundManager() {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play();
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/Sound/back_sound.mp3");
        this.click_sound = new egret.Sound();
        this.click_sound.load("resource/assets/Sound/click.mp3");
        this.Bubble_click_sound = new egret.Sound();
        this.Bubble_click_sound.load("resource/assets/Sound/Bubble_click.mp3");
        // this.wrong_sound=new egret.Sound();
        // this.wrong_sound.load("resource/assets/data/sound/wrong.mp3");
        // this.typeWord_sound=new egret.Sound();
        // this.typeWord_sound.load("resource/assets/data/sound/type_word.mp3");
    }
    Object.defineProperty(SoundManager, "Instance", {
        get: function () {
            if (!SoundManager.instance) {
                SoundManager.instance = new SoundManager();
            }
            return SoundManager.instance;
        },
        enumerable: true,
        configurable: true
    });
    //播放背景音乐
    SoundManager.prototype.PlayMusic = function () {
        if (this.IsMusic && this.bg_music) {
            this.soundChannel = this.bg_music.play(0, 0);
        }
    };
    SoundManager.prototype.StopMusic = function () {
        if (this.soundChannel != null) {
            this.soundChannel.stop();
        }
    };
    //播放音效，初步学习设计，后期更改更优方案
    SoundManager.prototype.PlaySound = function (name) {
        if (!this.IsSound)
            return;
        switch (name) {
            case SoundType.Click:
                this.click_sound.play(0, 1);
                break;
            case SoundType.Right:
                this.Bubble_click_sound.play(0, 1);
                break;
            case SoundType.Wrong:
                this.wrong_sound.play(0, 1);
                break;
            case SoundType.TypeWord:
                this.typeWord_sound.play(0, 1);
                break;
        }
    };
    Object.defineProperty(SoundManager.prototype, "IsMusic", {
        /**背景音乐播放状态保存 */
        get: function () {
            var status = egret.localStorage.getItem("IsMusic");
            if (status == null || status == "")
                return true;
            else
                return status == "1";
        },
        set: function (value) {
            if (value) {
                egret.localStorage.setItem("IsMusic", "1");
                this.PlayMusic();
            }
            else {
                egret.localStorage.setItem("IsMusic", "0");
                this.StopMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "IsSound", {
        /**音效播放状态获取保存 */
        get: function () {
            var status = egret.localStorage.getItem("IsSound");
            if (status == null || status == "")
                return true;
            else
                return status == "1";
        },
        set: function (value) {
            if (value)
                egret.localStorage.setItem("IsSound", "1");
            else
                egret.localStorage.setItem("IsSound", "0");
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=sound.js.map