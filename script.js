var rjomba_idet = "net";
var roflan;

var Sanya = {
    init_rjomba: function(d) {
        if (rjomba_idet == "net") {
            var rofl = d.getAttribute("data-rjaka");
            Sanya.start_rjomba(rofl,true);
            rjomba_idet = "da";
        } else {
            roflan.pause();
            rjomba_idet = "net"
        }
    },
    start_rjomba: function(rofl,loop){
      roflan = new Audio(rofl+".mp3");
      roflan.loop = loop;
      roflan.autoplay = true;
      roflan.id = "kek";
    }
};

//Я ебал
