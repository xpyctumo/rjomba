var rjomba_idet = "net";

var Sanya = {
    init_rjomba: function(d) {
        if (rjomba_idet == "net") {
            var rofl = d.getAttribute("data-rjaka");
            document.getElementById("sanya_rjomba").innerHTML = "<audio id='rjomba' src='" + rofl + ".mp3' autoplay loop></audio>";
            rjomba_idet = "da";
        } else {
            document.getElementById("sanya_rjomba").innerHTML = "";
            rjomba_idet = "net"
        }
    },
};
