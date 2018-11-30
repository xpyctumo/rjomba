var rjomba_odin_nachalas = false;
var rjomba_dva_nachalas = false;
var Sanya = {
    rjomba1: function() {
        document.getElementById("sanya_rjomba_odin").innerHTML = "<audio id=\"rjomba\" src=\"1.mp3\" autoplay></audio>";
    },
    rjomba2: function() {
        document.getElementById("sanya_rjomba_dva").innerHTML = "<audio id=\"rjomba\" src=\"2.mp3\" autoplay></audio>";
    },
    stop_rjomba_1: function() {
        document.getElementById("sanya_rjomba_odin").innerHTML = "";
    },
    stop_rjomba_2: function() {
        document.getElementById("sanya_rjomba_dva").innerHTML = "";
    },
    init_rjomba_odin: function() {
        if (!rjomba_odin_nachalas) {
            Sanya.rjomba1();
            var rjomba = document.getElementById('rjomba');
            rjomba.loop = true;
            rjomba_odin_nachalas = true;
        } else {
            Sanya.stop_rjomba_1();
            rjomba_odin_nachalas = false;
        }
    },
    init_rjomba_dva: function() {
        if (!rjomba_dva_nachalas) {
            Sanya.rjomba2();
            var rjomba = document.getElementById('rjomba');
            rjomba.loop = true;
            rjomba_dva_nachalas = true;
        } else {
            Sanya.stop_rjomba_2();
            rjomba_dva_nachalas = false;
        }
    },
};

addEventListener("keydown", function(e) {
    switch (e.keyCode) {
        case 49:
        case 32:
            Sanya.rjomba1();
            break;
        case 50:
        case 91:
            Sanya.rjomba2();
            break;
    }

});
