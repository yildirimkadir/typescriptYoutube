"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hallo Welt";
greetings.toLocaleLowerCase();
console.log(greetings);
// number 
var userId = 3314.3;
var user = 231356; // ya da böyle de assign edebilirsin
// user = "Kadir" // Ama Number atadigin bir variable i tekrar string assign edemezsin. 
// boolean
var isLoggedIn = false;
// any type;
// let hero; --> böyle (any) type birakmak tavsiye edilmiyor. cünkü function return kisminda boolean veya string yazdigimda bunu algilamaz ve API Call da sikinti cikarabilir.
var hero; // bu sekilde daha dogru diyor  
function getHero() {
    return "thor"; // --> yukarda string dediysen simdi boolean veremezsin. (asagida hata verir)
}
hero = getHero();
