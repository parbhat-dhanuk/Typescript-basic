
// alias
let num = 5
let message:string="parbhat"
message="rabel"
let isNepali:any = true
isNepali="yes"
isNepali=5

//array

let number:number[] = [1,2,3]
let names:string[]=["ppp","er","wer","dfghj"]

const fff=["parbhat",44,true,"hjk"]

enum Direction{
    "top","buttom","left","right"
}
let useDiraection:Direction=Direction.right


interface Person{
    name:string;
    age:number;
    education:boolean;
}
let rabel:Person={
    age:22,
    name:"parbhat",
    education:false
}
interface Employee extends Person{
    
    role:string

}
let employee:Employee={
     name:"rtyui",
     age:33,
     education:true,
     role:"gfhj"

}



// type Parbhat = number
// let userId:Parbhat =33

// type Rabel=string

// let username:Rabel ="parbhat"

// let bestEmployee:Rabel="jukk"

//union

// type ID=number|string|boolean

// let userID:ID ="parbhat"
// let age:ID =22
// let isNepali:ID=true
// let group:ID[]=[1,2,3,true]


// intersection

// type Employee ={
//     name:string,
//     age:number
// }
// type Skill={
//     language:string
// }

// type SoftwareEngineer=Employee&Skill

// let developer:SoftwareEngineer ={
//   name:"parbhat",
//   age:28,
//   language:"english"
  
// }

//Function

function add(a:number,b:number):number{
    return a+b
}

let result =add(2,3)

type Multiply = (a:number,b:number)=>number

const multiply:Multiply=(a,b)=>a*b

let result2=multiply(2,4)



//optional

interface User{
    id:number,
    name:string,
    email? :string
}

let friend1:User={
    id:22,
    name:"parbhat dhanuk",
    email:"parbhat@gmail.com"   //dida ni vayo nadida ni vayo optional ho email(?)


}