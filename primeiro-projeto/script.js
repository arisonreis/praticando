 
var body = {
  noite: "#01162E",
  dia: "#29B6F6",  
  tarde: "orange",
};
var backCenter = [
  {
    noite:
      "linear-gradient( 126.3deg,  rgba(30,2,83,1) 32.2%, rgba(198,55,160,0.46) 109.2% )",
  },
  { dia: "white" },
  { tarde: "#E8FE0A" },
];
const insta = [
  { dia: "instagram02.webp" },
  { tarde: "instablack.webp" },
  { noite: "instared.webp" }
];
const corH1 = {
  dia: "white",
  tarde: "black",
};
const garoto = {
  dia: "garoto.webp",
  tarde: "garotoamarelo.png",
  noite: "garotoazul.png",
};
const github = {
  dia: "white",
  noite: "#8F3A84",
  tarde: "black",
};
const btn2 = {
  dia: "yellow",
  tarde: "#27AE60",
  noite: "#8F3A84",
};
var statusbutton ;
 function transformar() {
  //Valor do Input Time
  var valor = document.getElementById("input").value;

  // Condições
 if (valor >= "05:00" && valor <= "12:59") {
    document.body.style.background = `${body.dia}`;
    document.getElementById("img-nav").src = `${insta[0].dia}`;
    document.getElementById("garoto").src = `${garoto.dia}`;
    document.getElementById(
      "principal"
    ).style.background = `${backCenter[1].dia}`;
    document.getElementById("btn2").style.background = `${btn2.dia}`;
    document.getElementById("github").style.color = `${github.dia}`;
    document.getElementById("btn1").style.background = `${body.dia}`;
    document.getElementById("btn3").style.background = `${body.dia}`;
    document.getElementById("p-footer").style.color = "red";
    document.getElementById("h1").style.color = "white";
    document.getElementById("cor").style.backgroundImage = "url('sol.webp')";
    document.getElementById("div_sol").style.background = "yellow";
    document.getElementById("div_sol").style.border = `${body.dia}`;
    document.getElementById("h2").style.color = "black";
    document.getElementById("h3").style.color = "black";
    document.getElementById("perfil").style.backgroundImage =
      "url('manhã.jpg')";
  } else if (valor >= "13:00" && valor <= "17:59") {
    document.getElementById("github").style.color = `${github.tarde}`;
    document.body.style.background = `${body.tarde}`;
    document.getElementById("garoto").src = `${garoto.tarde}`;
    document.getElementById("img-nav").src = `${insta[1].tarde}`;
    document.getElementById("p-footer").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.tarde}`;
    document.getElementById("btn2").style.background = `${btn2.tarde}`;
    document.getElementById(
      "principal"
    ).style.background = `${backCenter[2].tarde}`;
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn3").style.background = "white";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn3").style.color = "black";
    document.getElementById("perfil").style.backgroundImage =
      "url('tarde.jpg')";
    document.getElementById("div_sol").style.background = "yellow";
    document.getElementById("h2").style.color = "black";
    document.getElementById("cor").style.backgroundImage = "url('sol.webp')";
    document.getElementById("h3").style.color = "black";
  } else if (valor >= "18:00" && valor <= "23:59") { 
    document.body.style.background = `${body.noite}`;
    document.getElementById("principal").style.background = `${backCenter[0].noite}`;
    document.getElementById("h2").style.color = "white";
    document.getElementById("h3").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.dia}`;
    document.getElementById("p-footer").style.color = "#8F3A84";
    document.getElementById("btn2").style.background = "#8F3A84";
    document.getElementById("cor").style.backgroundImage = "url('lua.webp')";
    document.getElementById("div_sol").style.background = `${body.noite}`;
    document.getElementById("div_sol").style.border = "black";
    document.getElementById("btn1").style.background = "#8F3A84";
    document.getElementById("btn3").style.background = "#8F3A84";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("btn3").style.color = "white";
    document.getElementById("github").style.color = "#8F3A84";
    document.getElementById("perfil").style.backgroundImage = "url('noite.jpg')";
    document.getElementById("img-nav").src = `${insta[2].noite}`;
    document.getElementById("garoto").src = `${garoto.noite}`;
    
  } else if (valor >= "00:00" && valor <= "04:59") {
    document.body.style.background = `${body.noite}`;
    document.getElementById("principal").style.background = `${backCenter[0].noite}`;
    document.getElementById("h2").style.color = "white";
    document.getElementById("h3").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.dia}`;
    document.getElementById("p-footer").style.color = "#8F3A84";
    document.getElementById("btn2").style.background = "#8F3A84";
    document.getElementById("cor").style.backgroundImage = "url('lua.webp')";
    document.getElementById("div_sol").style.background = `${body.noite}`;
    document.getElementById("div_sol").style.border = "black";
    document.getElementById("btn1").style.background = "#8F3A84";
    document.getElementById("btn3").style.background = "#8F3A84";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("btn3").style.color = "white";
    document.getElementById("github").style.color = `${github.noite}`;
    document.getElementById("perfil").style.backgroundImage ="url('noite.jpg')";
    document.getElementById("img-nav").src = `${insta[2].noite}`;
    document.getElementById("garoto").src = `${garoto.noite}`;
  } 

  if(valor==''){
    alert('digite algo')
   
  }else{
  document.getElementById("btn3").style.display='inline';
  document.getElementById("btn1").style.display='none';
  }
  }

function migrar(){
  var moveon = confirm('Você será direcionado para meu instagram, ok?');
  if(moveon) window.location = ("https://www.instagram.com/arison_dev/");  
}


var valueHr;
const update = () =>{
  const data =  new Date();
  const hr = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

const values = `
<img id="relogio" src="relogioanimado.webp">
<h2 id="h2">
Agora são 
<span id="hr">${String(hr).length===1?  `0${hr}`  :hr  }</span> Horas, 
<span id="min">${String(min).length===1? `0${min}` :min }</span> Minutos e
<span id="seg">${String(seg).length===1 ? `0${seg}`:seg }</span> Segundos
</h2>
`
document.getElementById("cima").innerHTML = values; 

 valueHr = parseInt(hr)
return valueHr;

}
setInterval(update,1000)


var uh = ()=>{
//aqui vai a automação do site com o senário, de acordo com a hora
  if(valueHr>=00  && valueHr<=4){
    document.body.style.background = `${body.noite}`;
    document.getElementById("principal").style.background = `${backCenter[0].noite}`;
    document.getElementById("h3").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.dia}`;
    document.getElementById("p-footer").style.color = "#8F3A84";
    document.getElementById("btn2").style.background = "#8F3A84";
    document.getElementById("cor").style.backgroundImage = "url('lua.webp')";
    document.getElementById("div_sol").style.background = `${body.noite}`;
    document.getElementById("div_sol").style.border = "black";
    document.getElementById("btn1").style.background = "#8F3A84";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("github").style.color = `${github.noite}`;
    document.getElementById("perfil").style.backgroundImage ="url('noite.jpg')";
    document.getElementById("img-nav").src = `${insta[2].noite}`;
    document.getElementById("perfil").style.border.hover = "red";
    document.getElementById("garoto").src = `${garoto.noite}`;
  }
  else if(valueHr>=5  && valueHr<=12){
    document.body.style.background = `${body.dia}`;
    document.getElementById("img-nav").src = `${insta[0].dia}`;
    document.getElementById("garoto").src = `${garoto.dia}`;
    document.getElementById(
      "principal"
    ).style.background = `${backCenter[1].dia}`;
    document.getElementById("btn2").style.background = `${btn2.dia}`;
    document.getElementById("github").style.color = `${github.dia}`;
    document.getElementById("btn1").style.background = `${body.dia}`;
    document.getElementById("p-footer").style.color = "red";
    document.getElementById("h1").style.color = "white";
    document.getElementById("cor").style.backgroundImage = "url('sol.webp')";
    document.getElementById("div_sol").style.background = "yellow";
    document.getElementById("div_sol").style.border = `${body.dia}`;
    document.getElementById("h2").style.color = "black";
    document.getElementById("h3").style.color = "black";
    document.getElementById("perfil").style.backgroundImage =
      "url('manhã.jpg')";
  } else if (valueHr>=13  && valueHr<=17){
    document.getElementById("github").style.color = `${github.tarde}`;
    document.body.style.background = `${body.tarde}`;
    document.getElementById("garoto").src = `${garoto.tarde}`;
    document.getElementById("img-nav").src = `${insta[1].tarde}`;
    document.getElementById("p-footer").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.tarde}`;
    document.getElementById("btn2").style.background = `${btn2.tarde}`;
    document.getElementById(
      "principal"
    ).style.background = `${backCenter[2].tarde}`;
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("perfil").style.backgroundImage =
      "url('tarde.jpg')";
    document.getElementById("div_sol").style.background = "yellow";
    document.getElementById("cor").style.backgroundImage = "url('sol.webp')";
    document.getElementById("h3").style.color = "black";
  }else if(valueHr>=18 && valueHr<=23){
    document.body.style.background = `${body.noite}`;
    document.getElementById("principal").style.background = `${backCenter[0].noite}`;
    document.getElementById("h3").style.color = "white";
    document.getElementById("h1").style.color = `${corH1.dia}`;
    document.getElementById("p-footer").style.color = "#8F3A84";
    document.getElementById("btn2").style.background = "#8F3A84";
    document.getElementById("cor").style.backgroundImage = "url('lua.webp')";
    document.getElementById("div_sol").style.background = `${body.noite}`;
    document.getElementById("div_sol").style.border = "black";
    document.getElementById("btn1").style.background = "#8F3A84";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("github").style.color = `${github.noite}`;
    document.getElementById("perfil").style.backgroundImage ="url('noite.jpg')";
    document.getElementById("img-nav").src = `${insta[2].noite}`;
    document.getElementById("garoto").src = `${garoto.noite}`;
  }
}
setTimeout(uh,1000)

function voltar(){
 uh()
 document.getElementById('btn3').style.display='none'
 document.getElementById('btn1').style.display='inline'  
}
setTimeout(voltar,200)

function over(){
  document.getElementById('p-garoto').innerHTML = 'Oi, Meu Nome <br> é Arison'
  return
}
function out(){
  document.getElementById('p-garoto').innerHTML ='As cores e imagens<br> mudam de acordo<br> com a hora' 
}