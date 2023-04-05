connexions = JSON.parse(localStorage.getItem('connexions'))

function reloadPage () {
  connexions = JSON.parse(localStorage.getItem('connexions'))
  document.getElementById('list').innerHTML = 
  `
  <div class="listPTemplate">
    <p class="firstLiTemplate">Identifiant</p>
    <p class="secondLiTemplate">Mot de Passe</p>
    <p class="thirdLiTemplate">Site ou Appli</p>
  </div>
  `
  for(let i = 0; i<connexions.length; i++) {
    document.getElementById("list").innerHTML += 
    `
    <div class="listP">
      <p class="firstLi">${connexions[i].Identifiant}</p>
      <p class="secondLi">${connexions[i].MotDePasse}</p>
      <p class="thirdLi">${connexions[i].SiteOuAppli}</p>
      <button onclick="suppr(${i})" class="suppr"><i class="fa-regular fa-trash-can"></i></button>
    </div>
    `
    }
}

reloadPage()

function suppr(i) {
  connexions.splice(i, 1)
  localStorage.setItem('connexions', JSON.stringify(connexions))
  reloadPage()
}