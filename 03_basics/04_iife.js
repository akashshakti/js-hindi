// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();


//  ++++++++++ IIFE ++++++++
//    ()()  symbol        &  ; it is importent
//  global scope sa hona wali palution ka sloution

(  (name) => {
    // unname IIFE 
    console.log(`DB IS CONNECTED TOW ${name}`);
    
})('akash');

