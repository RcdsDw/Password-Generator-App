/* récupération des éléments */

const password = document.getElementById('screen')
const copyElem = document.getElementById('copy')

const checkbox1 = document.getElementById('upper')
const checkbox2 = document.getElementById('lower')
const checkbox3 = document.getElementById('number')
const checkbox4 = document.getElementById('symbol')

const range = document.getElementById("myRange")
let passwordLength = range.value
let copied = document.getElementById('copied')

const slider = document.querySelector('.slideContainer')

/* tableaux caractères mot de passe */

const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const symbols = ['!', '.', '?', '&', '#', '+', '-', '*', '/', '^', '%', '=']

/* fonctions 'randoms' */

function includeUppers() {
    return uppers[Math.floor(Math.random()*uppers.length)]
}

function includeLowers() {
    return lowers[Math.floor(Math.random()*lowers.length)]
}

function includeNumbers() {
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function includeSymbols() {
    return symbols[Math.floor(Math.random()*symbols.length)]
}

/* protection */

function faible(){
  let strength = document.getElementById('strPassword')

  strength.innerHTML = 
  `<p id="protect">PROTECTION</p> <p id="percentStr">FAIBLE</p>
  <div id="bar"> 
    <p id="first"></p>
    <p id="second"></p>
    <p id="third"></p>
    <p id="fourth"></p>
  </div> `

  let color = document.getElementById('first')
  color.style.backgroundColor = '#F64A4A'
}

function moyenne(){
  let strength = document.getElementById('strPassword')

  strength.innerHTML = 
  `<p id="protect">PROTECTION</p> <p id="percentStr">MOYENNE</p>
  <div id="bar"> 
    <p id="first"></p>
    <p id="second"></p>
    <p id="third"></p>
    <p id="fourth"></p>
  </div> `

  let color1 = document.getElementById('first')
  let color2 = document.getElementById('second')
  color1.style.backgroundColor = '#FB7C58'
  color2.style.backgroundColor = '#FB7C58'
}

function forte(){
  let strength = document.getElementById('strPassword')

  strength.innerHTML = 
  `<p id="protect">PROTECTION</p> <p id="percentStr">FORTE</p>
  <div id="bar"> 
    <p id="first"></p>
    <p id="second"></p>
    <p id="third"></p>
    <p id="fourth"></p>
  </div> `

  let color1 = document.getElementById('first')
  let color2 = document.getElementById('second')
  let color3 = document.getElementById('third')
  color1.style.backgroundColor = '#F8CD65'
  color2.style.backgroundColor = '#F8CD65'
  color3.style.backgroundColor = '#F8CD65'
}

function invincible(){
  let strength = document.getElementById('strPassword')

  strength.innerHTML = 
  `<p id="protect">PROTECTION</p> <p id="percentStr">INVINCIBLE</p>
  <div id="bar"> 
    <p id="first"></p>
    <p id="second"></p>
    <p id="third"></p>
    <p id="fourth"></p>
  </div> `

  let color1 = document.getElementById('first')
  let color2 = document.getElementById('second')
  let color3 = document.getElementById('third')
  let color4 = document.getElementById('fourth')
  color1.style.backgroundColor = '#A4FFAF'
  color2.style.backgroundColor = '#A4FFAF'
  color3.style.backgroundColor = '#A4FFAF'
  color4.style.backgroundColor = '#A4FFAF'
}

/* function création du mot de passe */

function createPassword(){
    let passwordString = ''
    
    /* tableaux des fonctions 'randoms' */

    const functions = []

    if(checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false && checkbox4.checked == false){
        alert(`Il faut 'check' une option pour créer votre mot de passe`)
    }
    if (checkbox1.checked) {
        functions.push(includeUppers);
      }
      if (checkbox2.checked) {
        functions.push(includeLowers);
      }
      if (checkbox3.checked) {
        functions.push(includeNumbers);
      }
      if (checkbox4.checked) {
        functions.push(includeSymbols);
      }
    for(let i = 0; i<passwordLength; i++) {
        let randomFunction = functions[Math.floor(Math.random()*functions.length)]
        passwordString += randomFunction()
    }
    password.innerText = passwordString
    copied.style.color = "var(--bloc-color)"

      functions.length == 1 && passwordLength <= 10 ? faible() 
    : functions.length == 3 && passwordLength >= 14 ? forte() 
    : functions.length == 4 && passwordLength == 16 ? invincible() 
    :                                                 moyenne()
}

/* function copier */

function copy() {
  navigator.clipboard.writeText(password.innerText).then(function() {
    copied.style.color = "var(--slide-color)"
  }, function() {
    alert(`La copie n'a pas fonctionné`)
  })
}

// fonction pour afficher le nombre de charactères souhaités

function sliderChange(e) {
  passwordLength = range.value

  if(passwordLength = e) {
    slider.innerHTML = `<div id="valueChanged"> <p id="numberCarac">Nombres de Caractères</p> <p>${passwordLength}</p> </div>
    <input type="range" min="8" max="16" value="${passwordLength}" class="slider" id="myRange" onchange="sliderChange(this.value)" >`
  }

  return
}

/* sauvegarde et enregistre */

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("save");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal // function save password to form
btn.onclick = function() {
  let pass = document.getElementById('pass')

  if (password.innerText == "P4$5W0rD!") {
    alert("Erreur, veuillez générer un mot de passe")
    return
  } else {
    pass.value = password.innerHTML
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// function submit to gestion.html

let connexions = []

document.getElementById('form').addEventListener('submit', function(e) {

  let id = document.getElementById('identifiant').value
  let pass = document.getElementById('pass').value
  let site = document.getElementById('siteAppli').value

  e.preventDefault()

  if (id === '' || site === '')
    alert(`L'identifiant et le site ou l'appli sont obligatoires`);
  else {
    connexions = JSON.parse(localStorage.getItem('connexions')) ?? []
    connexions.push({
      Identifiant: id,
      MotDePasse: pass,
      SiteOuAppli: site,
    });
    localStorage.setItem('connexions', JSON.stringify(connexions));
    modal.style.display = "none"
    
  }
})

// show/hide eye button

const eye = document.querySelector(".fa-eye");
const eyeoff = document.querySelector(".fa-eye-slash");
const passwordField = document.querySelector("input[type=password]");

eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";
  passwordField.type = "text";
});

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";
  passwordField.type = "password";
});

// When the user clicks anywhere outside of the modal or the button, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}