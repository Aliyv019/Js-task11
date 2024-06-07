// //task1
// function task1() {
//     console.log("Hello World");
// }
// task1()

// //task2
// function task2(a){
//     console.log(a);
// }
// // task2(5)

// //task3
// function task3(b) {
//     console.log(b*2);
// }
// // task3(+prompt("enter your number for task3:"))

// //task4
// function task4(x,y) {
//     console.log(x*y);
// }
// // task4(+prompt("enter your first number for task4"),+prompt("enter your second number for task4"))

// //task5
// function task5(ad,soyad,yas) {
//     console.log(`My name is ${ad}. My surname is ${soyad}. My age is ${yas}`);
// }
// // task5(prompt("Enter your name"),prompt("Enter your surname"),+prompt("Enter your age"))

// //task6
// function task6(a,b,emel) {
//     if(emel=="+"){
//         console.log(a+b);
//     }
//     else if(emel=="-"){
//         console.log(a-b);
//     }
//     else if(emel=="*"){
//         console.log(a*b);
//     }
//     else if(emel=="/"){
//         if (b!=0) {
//             console.log(a/b);
//         }
//         else{
//             alert("You can't divide by 0")
//         }
//     }
//     else{
//         alert("Please enter one of +,-,*,/ operators")
//     }
// }
// // task6(+prompt("Enter first number for task 6"),+prompt("Enter your second number for task 6"),prompt("Enter an operator"))

// //task7
// function task7(a) {
//     console.log(a**3);
// }
// // task7(+prompt("Enter a number for task 7"))

// //task8
// function task8(a,b) {
//     console.log(`Perimeter of our rectangle: ${2*(a+b)} \nArea of our rectangle: ${a*b}`);
// }
// // task8(+prompt("Enter the width of your rectangle"),+prompt("Enter the height of your rectangle"))

// //task9




function task9() {
    let f =true
    while (f) {
 let a=+prompt("Enter first angle")
let b=+prompt("Enter second angle")
        if(a+b<180){
            console.log(180-a-b);
            f=false
        }
        else{
            alert("Please enter valid angles")
        }
    }
}
task9()

// //task10
// let arr=[45,67,89,23,55,88,93]
// function task10(a){
//     let f=false
//     let s=0
//     while (!f&&s<arr.length) {
//         if(arr[s]==a){
//             f=true
//         }
//         s++
//     }
//     if (f) {
//         console.log(`${a} is in our array`);
//     }
//     else{
//         console.log(`${a} is not in our array`);
//     }
// }
// // task10(+prompt("Enter a number for task10"))

// //task11
// function task11(x) {
//     console.log((8*x+45)/25-9);
// }
// // task11(+prompt("Enter your number for task 11"))

// //task12
// function task12(a,b) {
//     console.log((a/100)*b);
//     console.log((a*100)/b);
// }
// // task12(prompt("Enter number"),prompt("Enter your degree"))

// function differenceInAges(ages){
//     let arr=[]
//     let min=ages[0]
//     let max=ages[0]
//     for(let i=0;i<ages.length;i++){
//       if (ages[i]<min){
//         min=ages[i]
//       }
//       if(ages[i]>max){
//         max=ages[i]
//       }
//     }
//     arr.push(min);
//     arr.push(max)
//     arr.push(max-min)
//     return arr;
//   }