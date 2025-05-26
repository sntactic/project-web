class Joueur extends HTMLElement{
    constructor (nom , id){
        super()
        this.affiche_nom = document.createElement("p")
        this.affiche_nom.classList.add("nom_joueur")
        this.affiche_nom.textContent = nom

        this.affiche_score = document.createElement("p")
        this.affiche_score.setAttribute("id" , `score${id}`)
        this.affiche_score.classList.add("score")
        this.affiche_score.textContent = 0

        this.appendChild(this.affiche_nom)
        this.appendChild(this.affiche_score)

        this.classList.add("joueur")
        this.setAttribute("id" , `joueur${id}`)
    }


}


customElements.define("mon-joueur" , Joueur )

let parent = document.getElementById("players")

const joueurs = localStorage.getItem("liste_joueurs").split(",")
console.log(joueurs)
localStorage.clear()

for (let i = 1 ; i <= 4 ; i++){
    let player = new Joueur(joueurs[i*1-1] , i)

    parent.appendChild(player)
}