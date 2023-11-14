class User {
    constructor(name, email, password) {}

    setName(inputan) {
        if (inputan.length < 3) {
            return "Error inputan kurang dari 3"
        } else {
            this.name = inputan;
        }
    }

    getName() {
        return this.name;
    }

    store() {
        // to DB/
    }

    remove(id) {

    }
}

module.exports = User;