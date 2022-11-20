document.querySelector('.Cookie').style.opacity = '100%';

//Vérification si cookies acceptés ou non
document.querySelector('.Oui').addEventListener('click', mangeons);

function mangeons(){
    document.cookie = `nombre=0; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    document.querySelector('.Cookie').style.display = 'none';
}

document.querySelector('.Non').addEventListener('click', dommage);

function dommage(){
    document.querySelector('.Cookie').style.display = 'none';
}

//Création de ma variable 'nombre', pour compter les clics
if (document.cookie!=""){
    var nombre = document.cookie.split('=')[1];
    document.querySelector('.Cookie').style.display = 'none';                        
} else {
    var nombre = 0;
}
// console.log(document.cookie.split(';')[0].split['=']);

document.querySelector(".Nombre>span").innerHTML=nombre;

document.querySelector("body").addEventListener("click", WaZa);

//Pour qu'au refresh les img réapparaissent sans besoin d'un clic
if(nombre!=0){
    var oui = document.cookie.split('=')[1].split('').reverse();
    document.querySelector('.WaZa').innerHTML="";
    for(i=0; i<oui.length; i++){
        for(o=0;o<oui[i];o++){
            document.querySelector('.WaZa').innerHTML+="<img src='img/wazapng.png' width='" + (i+1)*10 + "px' height='" + (i+1)*10 + "px' alt='WaZaCuBe'>";
        }
    }
}

//Fonction qui fait tout en gros ouais commentaire utile mais jme repère
function WaZa(){
    if(document.querySelector('.Cookie').style.display == 'none')
    {
        nombre++;
        // MISE A JOUR DU COOKIE DU NB DE CLIC
        if (document.cookie!=""){
            document.cookie = `nombre=` + nombre + `; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
        }
        
        //Affichage du nombre de clics effectués
        document.querySelector(".Nombre>span").innerHTML=nombre;


        //Affichage des WaZaCubes à l'écran
        var oui = document.querySelector('.Nombre>span').innerText.split('').reverse();

        document.querySelector('.WaZa').innerHTML="";

        for(i=0; i<oui.length; i++){
            for(o=0;o<oui[i];o++){
                document.querySelector('.WaZa').innerHTML+="<img src='img/wazapng.png' width='" + (i+1)*10 + "px' height='" + (i+1)*10 + "px' alt='WaZaCuBe'>";
            }
        }

        // Apparitions des émojis 'prière' aléatoirement
        var top = Math.random()*100+'vh';
        var left = Math.random()*100+'vw';
                
        var emoji = document.createElement("div");
        emoji.innerHTML = "<img src='img/priere.png' alt='Prière' width='100px' height='100px' class='NonSelectable'>";
        emoji.style.marginTop = top;
        emoji.style.marginLeft = left;
        emoji.style.position = 'fixed';
        emoji.style.animation = "priere 2s infinite";
        emoji.style.pointerEvents = "none";
        setInterval(death, 2000)
        document.querySelector(".LaGalère").appendChild(emoji);

        function death(){
            emoji.remove();
        }
    }
}