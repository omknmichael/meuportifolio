const data = new Date();
document.getElementById("IdDataAtual").innerHTML = data.getFullYear();
    
function abrirNav(){    
    document.getElementById("menuOculto").style.width="200px";
    document.getElementById("princpal").style.marginRight="200px";
}

function fecharNav(){    
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("princpal").style.marginRight="0";
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
