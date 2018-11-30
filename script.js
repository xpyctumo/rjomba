var rjomba_idet = "net";
var roflan, last_rjomba;

var Sanya = {
    init_rjomba: function(d) {
        var rofl = d.getAttribute("data-rjaka");
        if (rjomba_idet == "net") {
            Sanya.start_rjomba(rofl, true);
            last_rjomba = rofl;
            rjomba_idet = "da";
        } else {
            if (last_rjomba == rofl) {
                roflan.pause();
                rjomba_idet = "net"
            } else {
                roflan.src = rofl + ".mp3";
                last_rjomba = rofl;
            }

        }
    },
    start_rjomba: function(rofl, loop) {
        roflan = new Audio(rofl + ".mp3");
        roflan.loop = loop;
        roflan.autoplay = true;
        roflan.id = "kek";
    }
};

//Убейте меня
