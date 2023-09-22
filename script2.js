
 //1. Ədədin kvadratını qaytaran funksiyanı yazın 
//find(2); //4
//find(9); //81

//function find(square){
   //console.log(square*square);
//}
//find(9);


//2. Celsius göstəricisini Farenheitə çevirən funksiyasını yazın
 //calFahrenheit(20) //68

 //let celsius = prompt("Celsius deyerini qeyd edin");
 //function calFahrenheit(celsius) {
    //console.log((parseInt(celsius)*9)/5+32);
 //}
 //calFahrenheit(20);

 //3.  Ədədi tərsinə çevirən funksiyasını yazın
//reverseNumber(123)) //321
//reverseNumber(8790)) //0978



//4. Sətirdəki Saitlərin sayını yazın 
//count("Salam"); //2

//function vowel_count(str1) {
   //var vowel_list = 'aeiouAEIOU';
   //var vcount = 0;
   
   //for(var x = 0; x < str1.length ; x++) {
     //if (vowel_list.indexOf(str1[x]) !== -1) {
       //vcount += 1;
   //}
   //return vcount;
 //}
 //console.log(vowel_count('Salam'));


 //5. Iki rəqəmin cəmisini tapın. add adında bir funksiya yaradırsız. 
 //   Istifadəçidən iki rəqəmini daxil etməyini xahiş edin (num1, num2).
 // Daha sonra console-da həmin rəqəmlərinin cəmini qeyd edin

 //let a = prompt("Num1");
 //let b = prompt("Num2");

//function addNumbers(){
//console.log(parseInt(a)+parseInt(b));
//}

//addNumbers();




//1. N natural ədədlərin cəmini göstərən proqramı yazın. N rəqəmini istifadəçi daxil edir
// 5 daxil etse -> Cavab olmalıdır 15. (1+2+3+4+5).

//let sum = 0;

//for (let i = 1; i <= 5; i++) {
  //sum += i;
//}
//console.log(sum);



//2. 5-ə qədər bütün ədədlərin hasilin tapan proqram tərtib edin



//3. Konsola N dəfə «Hello World!» mesajı çıxaran proqram yazın.
//N ədədini itifadəçi daxil edir.

 //let a = prompt("Zehmet olmasa reqem daxil edin")
 //for (let i = 1; i <= a; i ++) {
   //console.log("Hello World " + i);
 //}



//4. N-ə qədər, 3-ə qalıqsız bölünən bütün ədədləri tapın.
// N ədədini istifadəçi daxil edir.

//let a = prompt("Eded daxil edin");
 //for(let i = 1; i <= a; i ++){
     //if( i % 3 == 0){
      //console.log(i);
     //}
 //}


//5. N-ə qədər, 3-ə qalıqsız bölünən ədədlərin cəmini tapın. 
//N ədədini istifadəçi daxil edir.
 //let a = prompt("Eded daxil edin");
 //let sum = 0;
 //for(let i = 1; i <= a; i ++){
    //if( i % 3 == 0){
      //sum +=i;
      //console.log(i);
     //}
//}
//console.log(sum);



// 14 daxil ed ildi -> consolda 30 olmalıdır (3 + 6 + 9 +12)

let sum = 0;

for (let i = 1; i <=12; i++) {
  sum += i;
}

console.log(sum);


