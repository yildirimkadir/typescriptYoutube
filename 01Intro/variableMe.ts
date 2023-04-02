let greetings: string = "Hallo Welt";
greetings.toLocaleLowerCase();

console.log(greetings);
// number 
let userId: number = 3314.3

let user = 231356 // ya da böyle de assign edebilirsin

// user = "Kadir" // Ama Number atadigin bir variable i tekrar string assign edemezsin. 


// boolean

let isLoggedIn: boolean = false

// any type;

// let hero; --> böyle (any) type birakmak tavsiye edilmiyor. cünkü function return kisminda boolean veya string yazdigimda bunu algilamaz ve API Call da sikinti cikarabilir.

let hero: string; // bu sekilde daha dogru diyor  

function getHero() {
    return "thor" // --> yukarda string dediysen simdi boolean veremezsin. (asagida hata verir)
}

hero = getHero();

export { }