// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName:function (){
//         console.log(this.firstName+" "+this.lastName)
//     }
//   };
//   person.fullName()

//   const anotherPerson = {
//     firstName: 'Jane',
//     lastName: 'Smith'
//   };
//  console.log( person.fullName.call(anotherPerson))




 const person = {
    firstName: 'irfan',
    lastName: 'ali',
    fullName:function (homeTwn,city){
        console.log( this.firstName+" "+this.lastName+" "+"from"+" "+homeTwn+" "+city)
    }
  };
//   person.fullName()

  const anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
  };
 console.log( person.fullName.apply(anotherPerson,["vengara","malappuram"]))





