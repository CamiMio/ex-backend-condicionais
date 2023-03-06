const caractere = "E";

if( 
    (caractere === "A" ) ||
    (caractere === "E" ) ||
    (caractere === "I" ) ||
    (caractere === "O" ) ||
    (caractere === "U" ) 

) {
    console.log("Vogal maiuscula");

} else if (
    (caractere === "a" ) ||
    (caractere === "e" ) ||
    (caractere === "i" ) ||
    (caractere === "o" ) ||
    (caractere === "u" )  
) {
    console.log("Vogal minúscula");

} else if (
    (caractere === 0 ) ||
    (caractere === 1 ) ||
    (caractere === 2 ) ||
    (caractere === 3 ) ||
    (caractere === 4 ) ||
    (caractere === 5 ) ||
    (caractere === 6 ) ||
    (caractere === 7 ) ||
    (caractere === 8 ) ||
    (caractere === 9 ) 
)    
  {
    console.log("Este caractere é um Número");
} else {
    console.log("Este caractere é uma consoante");
}