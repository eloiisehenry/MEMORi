const cards = document.querySelectorAll('.card');

let array = [
    {value: 1}, {value: 1},
    {value: 2}, {value: 2},
    {value: 3}, {value: 3},
    {value: 4}, {value: 4},
    {value: 5}, {value: 5},
    {value: 6}, {value: 6},
    {value: 7}, {value: 7},
    {value: 8}, {value: 8},
    {value: 9}, {value: 9},
    {value: 10}, {value: 10},
    {value: 11}, {value: 11},
    {value: 12}, {value: 12}
            ];

let cartesRetournees = [];
let duo = 0;

array = array.sort(() => Math.random() - 0.5);

function Freeze() {
    document.body.style.pointerEvents = 'none';
     setTimeout(function () {
         document.body.style.pointerEvents = 'auto';
     }, 1000);
 }
 function duoPlus(){
    duo++;
    document.querySelectorAll('.duo').forEach((span) => {
    span.innerHTML = duo;
      if (duo == 12) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé les 12 paires avec un temps de : " + timer.innerHTML);
          window.location.reload();
          // window.location.href = "win/win.html";
        }, 1000);
      }
}
)}

cards.forEach((card, id) => {
    const span = document.createElement("span");// card.innerHTML = array[id].value;
  span.textContent = array[id].value;
  card.appendChild(span);
    card.addEventListener("click", function(event){   
           
        if(!cartesRetournees.includes(array[id])) {
            console.log("ok"); //si la carte n'est pas dans le tableau
            cartesRetournees.push(array[id]);
            //affichage de la carte
            span.style.display = "none";//cacher le .value de la carte
            card.style.backgroundImage = `url(./image/${array[id].value}.png)`;
            card.style.backgroundSize="cover"; 
            event.target.classList.add('retourne');//on retourne la carte
          }

          if(cartesRetournees.length >= 2) {
            Freeze();
            
            let premiere = cartesRetournees[0];
            let deuxieme = cartesRetournees[1];
    
            console.log(premiere, deuxieme);
    
              let carteRetournee;
    
              if (premiere.value === deuxieme.value) {
                  console.log("gagné");
                  duoPlus();
                  setTimeout(() => {
                  cartesRetournees.forEach(() => {
                    carteRetournee = document.getElementsByClassName("retourne");
                    //on veut enlever la paire de carte 
                    // carteRetournee[0].parentNode.removeChild(carteRetournee[0]);
                    let vide = document.createElement("div");
                      vide.style.width = `${carteRetournee[0].offsetWidth}px`;
                      vide.style.height = `${carteRetournee[0].offsetHeight}px`;
                      carteRetournee[0].parentNode.replaceChild(vide, carteRetournee[0]);
                  });
           
                  cartesRetournees = [];
                  }, 1000);
              } else {
                  console.log("perdu");
                  setTimeout(() => {                      
                      cartesRetournees.forEach(() => {
                        carteRetournee = document.getElementsByClassName("retourne");
                        carteRetournee[0].querySelector("span").style.display = "none";
                        carteRetournee[0].style.backgroundImage = "url(./image/back.jpg)";
                        carteRetournee[0].classList.remove("retourne");
                      });
                      cartesRetournees = [];
                  }, 1000);
                }
              } 
        })
    });