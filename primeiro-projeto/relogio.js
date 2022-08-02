const uh = ()=>{
    const valueHr = parseInt(hr)
  
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
      document.getElementById("perfil").style.border.hover = "red";
      document.getElementById("garoto").src = `${garoto.noite}`;
    }
  
  
  }
  setInterval(uh, 300)

