(function() {
    console.log("loaded");

    var sound = new Howl({
        src : ['data/out.ogg'],
        loop : 1
    });

    if (localStorage) {
        localStorage.sound = sound;
    }

    var app = new Vue({
        el : "#app",
        data : {
            isStarted : false
        },
        methods : {
            getButtonName : function() {
                return this.isStarted ? "Stop" : "Start";
            },
            startStop : function() {
                this.isStarted = !this.isStarted;
                if (this.isStarted) {
                    sound.play();
                } else {
                    sound.stop();
                }
            }
        }
    });

})();