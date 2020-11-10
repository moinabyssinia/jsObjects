//prototype inheritance demo

let user = {
    name: "Michael",
    surname: "Tadesse",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

//create an admin object
let admin = {
    __proto__: user,
    isAdmin: true
};

// get admin full name
alert(admin.fullName);

// set admin full name
admin.fullName = "John Lewis";

// full name is changed admin only
admin.fullName; // John Lewis
user.fullName; // Michael Tadesse

