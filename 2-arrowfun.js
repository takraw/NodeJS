// const square=(x)=>{
//     return x*x  
// }
// console.log(square(8));

const event ={
    name: 'Varun',
    GuestList: ['keerthana','Harini','Gowri','Swetha'],
    PrintGuestList  () {
        console.log("GuestList for "+this.name);
        this.GuestList.forEach(function(){
            console.log(Guest + 'is attending' + this.name );
        })
    }
    
}
event.PrintGuestList()