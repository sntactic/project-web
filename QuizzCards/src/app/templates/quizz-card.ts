export class QuizzCard{
    reponse_vue = false;
    etat_repone = 'Reponse';
    couleur!:string;
    id !: number;
    public static numcard = 0;
    constructor(public domaine:string,
                public categorie:string,
                public imageUrl:string,
                public question:string, 
                public reponse:string, 
                public date:Date ){

        this.setCouleur(categorie)
        this.id=QuizzCard.numcard++
    }  

    setCouleur(difficile:string){
        switch (difficile) {
            case "facile":
                this.couleur = 'green'
              break;
            case "moyenne":
                this.couleur = 'yellow'
              break;
            case "difficile":
                this.couleur = 'blue'
              break;
            case "expert":
                this.couleur = 'red'
            break;
            case "génie":
                this.couleur = 'purple'
            break;
        }
    }

    onVoirReponse(): void{
        if (this.reponse_vue === false){
            this.etat_repone = 'Masquer'
            this.reponse_vue = true;
        }
        else{
            this.etat_repone = 'Reponse'
            this.reponse_vue = false;
        }
    }
    
}

    