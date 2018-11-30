var rjomba_odin_nachalas = false;
var rjomba_dva_nachalas = false;
var Sanya = {
    init_rjomba: function(d) {
      var rofl = d.getAttribute("data-rjaka");
      document.getElementById("sanya_rjomba").innerHTML = "<audio id='rjomba' src='"+rofl+".mp3' autoplay></audio>";
    },
};
