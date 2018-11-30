var rjomba_idet = "net";
var roflan = new Audio();
roflan.autoplay = true;
var last_rjomba;

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
        roflan.src = rofl + ".mp3";
        roflan.loop = loop;
        roflan.id = "kek";
    },
    random_rjomba: function() {
        if (rjomba_idet == "net") {
            //Получим все ржомбы со страницы, чтобы не хардкодить их каждый раз в js
            var rjombs = [];
            var dick = document.getElementsByClassName('Button');
            for (var whore = 0; whore < dick.length - 1; whore++) {
                rjombs.push(whores[whore].getAttribute('data-rjaka'));
            }
            roflan.src = rjombs[Math.floor(Math.random() * rjombs.length)] + ".mp3";
            roflan.loop = true;
            rjomba_idet = "da";
        } else {
            roflan.pause();
            rjomba_idet = "net"

        }


    }
};


addEventListener("keydown", function(e) {
    switch (e.keyCode) {
        case 49:
        case 32:
            roflan.src = "odin.mp3";
            break;
        case 50:
        case 91:
            roflan.src = "dva.mp3";
            break;
        case 51:
        case 18:
            roflan.src = "tri.mp3";
            break;
    }
});


//Убейте меня
