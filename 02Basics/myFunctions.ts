function addTwo(num: number) {
    return num + 2
}
function getUpper(val: string) {
    return val.toUpperCase
}
function signUpUser(name: string, email: string,
    isPaid: boolean) { }

let loginUser = (name: string, email: string,
    isPaid: boolean = false) => { }

let myValue = addTwo(5)
getUpper("kadir");

signUpUser("kadir", "kadir@kadir.com", true) // boolean eklenmeyse hata verir
loginUser("k", "k@k.com") // boolean eklenmezse hata vermez cünkü arguman bastan tanimli

//* name, email vs. gibi funct argumanlari bastan string vs olarak tanimlamazsak signUpUser(5, 5) dedigimizde örnegin hata vermez ama TypeScript in anlami kalmaz.   Cünkü any type olur o yüzden bastan tanimlanmali.

