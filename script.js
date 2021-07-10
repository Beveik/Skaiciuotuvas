
"use strict";
//Užduotis "Skaičiuotuvas"

//Sukurti skaičiuotuvą. Skaičiuotuve įvedami du skaičiai į du skirtingus input.
//Kiekvienas aritmetinis veiksmas atliekamas skirtingu mygtuko <button> paspaudimu.
//Rezultatas išvedamas į div.

var pirmas, antras, suma, atimtis, sandauga, dalyba;
 
function sudeti()
{
    pirmas = parseInt(document.getElementById("skaicius1").value);
antras = parseInt(document.getElementById("skaicius2").value);
  suma = pirmas + antras;
  document.getElementById("rezultatas1").innerHTML = suma;
 
}
function atimti()
{    pirmas = parseInt(document.getElementById("skaicius1").value);
antras = parseInt(document.getElementById("skaicius2").value);

 atimtis = pirmas - antras;
  document.getElementById("rezultatas2").innerHTML = atimtis;
}
function dauginti()
{    pirmas = parseInt(document.getElementById("skaicius1").value);
antras = parseInt(document.getElementById("skaicius2").value);
  sandauga = pirmas * antras;
  document.getElementById("rezultatas3").innerHTML = sandauga;
}
function dalinti()
{    pirmas = parseInt(document.getElementById("skaicius1").value);
antras = parseInt(document.getElementById("skaicius2").value);
  dalyba = pirmas / antras;
  document.getElementById("rezultatas4").innerHTML = dalyba;
}
