class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}simi`
    }
    set password(value){
           this._password = value
    }

}

const simi = new User("simi@bhak.com", "abc")
console.log(simi.password);
console.log(simi.email);

