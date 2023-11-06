function aleatoire(min, max) {

    return Math.floor(Math.round(max - min) * Math.random() + min);

}

class character {
    constructor(_nom, _vie, _attaque, _defense) {

        this.existe = false;

        if (_nom != "") {
            this.nom = _nom;
            this.vie = _vie;
            this.attaque = _attaque;
            this.defense = _defense;
            this.existe = true;
        } else {
            this.nom = "error";
        }


    }

    info() {
        console.log(this.nom + ": vie: " + this.vie + " - attaque: " + this.attaque + " -defense: " + this.defense);

    }

    attaquer(_defenseur) {
        console.log("attaque de" + this.nom + "sur" + _defenseur.nom)

        if (this.attaque > _defenseur.defense) {
            _defenseur.vie -= 10

        }
        else if (this.attaque == _defenseur.defense) {

            _defenseur.vie -= 5
        }
        else {
            this.vie -= 5
        }

        if (this.vie <= 0) {
            console.error(this.nom + "est mort")
            this.existe = false
        }

        else if (_defenseur.vie <= 0) {
            console.error(_defenseur.nom + "est mort")
            this.existe = false
        }
    }
};

let perso1 = new character("CRS", aleatoire(20, 100), aleatoire(20, 100), aleatoire(20, 100));
let perso2 = new character("GJ", aleatoire(20, 100), aleatoire(20, 100), aleatoire(20, 100))

perso1.info()

perso2.info()

perso1.attaquer(perso2)

perso1.info()

perso2.info()

