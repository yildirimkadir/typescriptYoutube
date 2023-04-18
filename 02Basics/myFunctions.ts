function addTwo(num: number): number {
    return num + 2
    //return "hallo"
} // simdi [ : number {} ] -> bu sekilde süslünün önünde ikiinci bir number yazmamizin sebebi, return "hello" gibi string ayarlanirsa bizi uyarsin diye. Yazmazsak debugging de zorluk yasariz. Ikinci number return kisminda da funct number type istesin diye. 
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

// Fonksiyon ikinci ders

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3] // bunu yazarsam map teki hero number oldugunu anliyor. Yukaridakini verdigimde de string oldugunu.

heros.map((hero): string => {
    return `hero is ${hero}`
}) // return 2 versin dersek burda hata verir. Cünkü map icindeki hero string olsun diyoruz. Yukaridaki ile ayni mantik. Demesek de olurdu. Ama debugiing icin daha iyi

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}




