
// Generics function in Typescript

// function addTwoNum(num1:number,num2:number):number{
//   return(
//     num1+num2
//   )
// }


// function addTwoStr(str1:string,str2:string):string{
//     return(
//         str1+str2
//     )
// }

// function identity<T>(param:T):T{
//     return param
// }
// let result = identity<string>("parbhat")
// console.log(result)


// interface Data<T,U>{
//  first:T
//  second:U
// }

// let data:Data< string ,number> = {
//     first:"parbhat",
//     second:55
// }

// let data2:Data<number,string> ={
//     first:22,
//     second:"parbhat"
// }

// function combine<T extends string|number>(a:T,b:T):string{
//     return `${a}${b}`
// }

// let final = combine("parbhat","dhanuk")
// console.log(final)