
// Inheritance

class Animal {
    name:string
    sound:string
  
  
    constructor(name:string,sound:string){
      this.name=name
      this.sound=sound
    }
    
    makeSound():void{
    console.log(`${this.name} says ${this.sound}`)
    }
  }
  
 
  
//   class Bird extends Animal{
//     canFly:boolean
  
//     constructor(name:string,sound:string,canFly:boolean){
//       super(name,sound)
//       this.canFly=canFly
      
//     }
//     fly():void{
//       if(this.canFly){
//         console.log(`${this.name} is flying`)
//       }else{
//         console.log(`${this.name} cannot fly`)
//       }
//     }
//   }

//  const eagle = new Bird("Eagle","screech",true)
//  eagle.makeSound()
//  eagle.fly()

// const ostrich = new Bird( "ostrich","screech",false)
//console.log(ostrich)
// ostrich.makeSound()
// ostrich.fly()



// Example 1




// class Shape{
//     color:string
  
//     constructor(color:string){
//       this.color=color
//     }
  
//   displayColor():void{
//     console.log(`Color:${this.color}`)
//   }
  
//   }
  
  
  
  
//   class Circle extends Shape{
//   radius:number
  
//   constructor(color:string,radius:number){
//     super(color)
//     this.radius=radius
//   }
//   calculateArea():number{
//     return Math.PI*this.radius**2
//   }
//   }
  
  
  
//   class Rectangle extends Shape{
//     length:number
//     breadth:number
  
//     constructor(length:number,breadth:number,color:string){
//       super(color)
//       this.length=length
//       this.breadth=breadth
//     }
//     calculateArea():number{
//       return this.length *this.breadth
//     }
    
//     }
  
//     const blueCircle=new Circle("blue",4)
//     blueCircle.displayColor()
//    console.log( blueCircle.calculateArea())
  //  const redRectangle=new Rectangle(3,4,"red")
  // redRectangle.displayColor()
  // console.log(redRectangle.calculateArea())
  


  //Polymorphism

  //Jaba same method 2 ya 2 vanda class ma exist garxa tyo lai polymorphism vanenxa.



  // class Cat{

  //   makeSound():void{
  //     console.log("Meow")
  //   }
  // }
  
  // class Dog{
  //   makeSound():void{
  //     console.log("Woof")
  //   }
  // }
  
  // function petSound(pet:any):void{
  //   pet.makeSound()
  // }
  // const myCat= new Cat()
  // const myDog=new Dog()
  
  // petSound(myCat)
  
  // petSound(myDog)




  
// Incapsulation

// Data Hiding is called as Incapulation 


// class Person{
//    private _name:string

//   constructor(name:string){
//     this._name=name
//   }
//   getName():string{
//   return this._name
//  }
//  setName(newName:string){
//   return this._name=newName
//  }
  
// }

// const person = new Person("Parbhat")
// // console.log(person.getName())



//abstraction
// Details hiding

// class Shape{
//   private _color:string

//   constructor(color:string){
//     this._color=color
//   }

//   //abstracting the implementation details
  
// private _calculateParamemter():number{
//   console.log("Calculating Perimeter")
//   return 0;
// }

// displayInfo():void{
//   const perimeter = this._calculateParamemter()
//   console.log(`Perimeter:${perimeter}`)

// }
  
//   const myShape = new Shape("red")
//   myShape.displayInfo()






