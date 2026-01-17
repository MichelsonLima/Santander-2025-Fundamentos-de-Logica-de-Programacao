class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

     attackMessage() {
        switch(this.type){
            case "warrior":
                return(`The ${this.type} attacked using a sword.`);
                
            case "wizard":
                return(`The ${this.type} attacked using a magic.`);
                
            case "ninja":
                return(`The ${this.type} attacked using a shuriken.`);
                
            case "monk":
                return(`The ${this.type} attacked using a martial art.`);
                
        }
    }
}

const hero1 = new Hero("Asgard", 20, "ninja")
console.log(hero1.attackMessage());
