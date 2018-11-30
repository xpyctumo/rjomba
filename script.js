var rjomba_idet = "net";
document.getElementById("sanya_rjomba").innerHTML = "<audio id=\"rjomba\"></audio>";
roflan = document.getElementById('rjomba');
//fucking safari


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
                Sanya.start_rjomba(rofl, true);
                last_rjomba = rofl;
            }
        }
    },
    start_rjomba: function(rofl, loop) {
        roflan.src = "sanya_cool_man/"+rofl+".mp3";
        roflan.play();
        roflan.loop = loop;
        roflan.id = "kek";
    },
    random_rjomba: function() {
        if (rjomba_idet == "net") {
            //Получим все ржомбы со страницы, чтобы не хардкодить их каждый раз в js
            var rjombs = [];
            var dick = document.getElementsByClassName('Button');
            for (var whore = 0; whore < dick.length - 1; whore++) {
                rjombs.push(dick[whore].getAttribute('data-rjaka'));
            }
            roflan.src = "sanya_cool_man/" + rjombs[Math.floor(Math.random() * rjombs.length)] + ".mp3";
            roflan.loop = true;
            roflan.play();
            rjomba_idet = "da";
        } else {
            roflan.pause();
            rjomba_idet = "net";
        }


    }
};

//Выше писал, что не хочу хардкодить и все равно хардкод. Мда.
addEventListener("keydown", function(e) {
    switch (e.keyCode) {
        case 49:
        case 32:
            roflan.src = "sanya_cool_man/odin.mp3";
            roflan.loop = false;
            roflan.play();
            break;
        case 50:
        case 91:
            roflan.src = "sanya_cool_man/dva.mp3";
            roflan.loop = false;
            roflan.play();
            break;
        case 51:
        case 18:
            roflan.src = "sanya_cool_man/tri.mp3";
            roflan.loop = false;
            roflan.play();
            break;
    }
});


//Убейте меня
