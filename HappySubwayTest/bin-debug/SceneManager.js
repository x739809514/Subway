var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
//创建一个场景管理类
var SceneManager = (function () {
    function SceneManager() {
    }
    Object.defineProperty(SceneManager, "Instance", {
        get: function () {
            if (SceneManager._Manager == null) {
                SceneManager._Manager = new SceneManager();
            }
            return SceneManager._Manager;
        },
        enumerable: true,
        configurable: true
    });
    //变换场景函数
    SceneManager.prototype.changeScene = function (s) {
        if (this.current_Scene) {
            this.rootLayer.removeChild(this.current_Scene);
            this.current_Scene = null;
        }
        this.rootLayer.addChild(s);
        this.current_Scene = s;
    };
    //载入场景函数
    SceneManager.prototype.pushScene = function (s) {
        this.closeScene();
        if (!this.pop_Scene) {
            this.rootLayer.addChild(s);
            this.pop_Scene = s;
        }
    };
    //关闭场景函数
    SceneManager.prototype.closeScene = function () {
        if (this.pop_Scene) {
            this.rootLayer.removeChild(this.pop_Scene);
            this.pop_Scene = null;
        }
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map