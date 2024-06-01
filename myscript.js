////////////////////////////////////////////////////////////////////////   

function alteraCorA(botao) {
 
   var userReturn;

   if (confirm("Voce deseja ligar o sistema?") == true) {
     /*alert("Sistema Ligado!");*/
      botao.attr('onclick', 'alteraCorB($(this));');
      btn1.style.background = 'green';
      btn1.class = "button_slide slide_right_red";
      myh1.innerHTML = 'Sistema FullTime - online';
      myh1.style.color = 'green';
      document.body.style.background = 'black';
      /* body.class = "bodyon"; */

    } else {
        return;
        // userReturn = "Cancelled!";
        // btn1.text.innerHTML = 'Off'
   }

  }
 
function alteraCorB(botao) {
   if (confirm("Voce deseja Desligar o sistema?") == true) {
      /*alert("Sistema Deligado!");*/
      botao.attr('onclick', 'alteraCorA($(this));');
      btn1.style.background = 'red';
      btn1.class = "button_slide slide_right_green";
      myh1.innerHTML = 'Sistema FullTime - offline';
      myh1.style.color = 'red';
      document.body.style.background = 'darkgray';
    

   } else {
      return;
      // userReturn = "Cancelled!";
      // btn1.text.innerHTML = 'Off'
    }

  }

////////////////////////////////////////////////////////////////////////   
// BACKUPS
////////////////////////////////////////////////////////////////////////   

/* 
  function removerContato(botao) {
  alert("vincularContato");
  botao.attr('onclick', 'vincularContato($(this));');
 }
 
 function vincularContato(botao) {
   alert("removerContato");
   botao.attr('onclick', 'removerContato($(this));');
 }

 const name = document.querySelector(".name");

  function changeColor(color) {
   name.style.color = color;
}

function funcao1() {

var x;
var r=confirm("Escolha um valor!");
if (r==true)
  {
  x="você pressionou OK!";
  }
else
  {
  x="Você pressionou Cancelar!";
  }
document.getElementById("demo").innerHTML=x;
}
 
function funcao2() {
  
  var userReturn;

   if (confirm("Voce deseja desligar o sistema?") == true) {
        userReturn = "Successfully!";
        btn1.text = 'Off' 
   } else {
        userReturn = "Cancelled!";
        btn1.text.innerHTML = 'On'
   }
 
  }
*/

////////////////////////////////////////////////////////////////////////   

