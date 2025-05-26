
function pret (){
   let parent = document.getElementById("champs_nom_joueur")
   let i = parent.childElementCount 
   if (i >= 4){
      document.getElementById("ajout").style.visibility = "hidden"
      document.getElementById("jouer").style.visibility = "visible"
   }
   else{
      document.getElementById("ajout").style.visibility = "visible"
      document.getElementById("jouer").style.visibility = "hidden"
   }

}

pret()

function ajouter_joueur (){
    let parent = document.getElementById("champs_nom_joueur")
    let new_player = document.createElement("div")
    let i = parent.childElementCount + 1
    let input_player = document.createElement("input")
    let bouton_player = document.createElement("button")
 
    new_player.setAttribute("style" , "display : flex; flex-wrap: wrap; gap : 20px;align-items: center;")
 
    bouton_player.setAttribute("style" , "width : 100px; background-color : red; color :white; border-radius : 6px; height : 20px")
    bouton_player.onclick = () => {
      new_player.remove()
      pret()
    }
    bouton_player.textContent = "supprimer"
 
    input_player.setAttribute("type" , "text")
    input_player.setAttribute("style" ,"width : 90%")
    input_player.setAttribute("placeholder" , "Veillez saisir le nom du joueur")
    input_player.setAttribute("class" , "joueur")
    input_player.setAttribute("id" , `j${i}`)
 
    new_player.append(bouton_player , input_player)
 
    parent.appendChild(new_player)

    pret()
 }
  
function affiche_nom_joueur(){
    let nom_joueur_1 = document.getElementById("j1").value
    let nom_joueur_2 = document.getElementById("j2").value
    let nom_joueur_3 = document.getElementById("j3").value
    let nom_joueur_4 = document.getElementById("j4").value

 
   return [nom_joueur_1 , nom_joueur_2 , nom_joueur_3 , nom_joueur_4]
}



function commencer_quizz(){ 
   joueurs = affiche_nom_joueur()
   localStorage.setItem("liste_joueurs" , joueurs)
   if (joueurs[0].trim() !== "" || joueurs[1].trim() !== "" || joueurs[1].trim() !== "" || joueurs[1].trim() !== "" ){
      document.getElementById("jouer").href="neuf_pts_gagnants.html" 
   }
}

