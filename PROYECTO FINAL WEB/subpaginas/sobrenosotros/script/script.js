/* 
    PAGINA DE SCRIPT:
    PROYECTO FINAL 1ºTRIMESTRE
    **** PÁGINA DE SOBRE NOSOTROS ****
    1ºDAM 2024/25
    ALBERTO MALDONADO TRIANA 
*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.topnav a').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
