/*  CIRCLE- CLASS

Convert the UML diagram to Typescript class. - use number for double
a)+circle():
class circle{
    constructor(){
    this.radius=1.0;
    this.color="red";
}
}
const circle1=new circle();
console.log(circle1);
//OUTPUT:
circle { radius: 1.0, color:'red' }//




b)+circle(radius:double):
class circle{
    constructor(radius=double){
    this.radius=radius;

}
}
const circle1=new circle(1.0);
console.log(circle1);

//OUTPUT:
circle { radius: 1.0}//




c)+circle(radius:double,color:string):
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
}
const circle1=new circle(100,"blue");

console.log(circle1);

//OUTPUT:
circle { radius: 100, color: 'blue' }//



D)get method:
     
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

    get radius(){
        return this._radius;
    }
    set radius(radius){
        this._radius=radius;
    }
    get color(){
        return this._color;
    }
    set color(color){
        this._color=color;
    }
        tostring(){
              return `circle [radius = ${this._radius} , color = ${this._color}]`;
            
        }

        getarea(){

            return Math.PI * Math.pow(this._radius, 2);
        

        }

        getcirumference(){
            
            return 2*Math.PI*this.radius;
        }

    }  
        const circle1 = new circle(10, "green");
        const circle2 = new circle(20,"pink");
        const circle3 = new circle(30,"white");
        
        console.log(circle1);
        console.log("Area:", circle1.getarea());
        console.log("Circumference:", circle1.getcirumference());

       
       console.log(circle2);    
       console.log("Area:", circle2.getarea()); 
       console.log("Circumference:", circle2.getcirumference());


       console.log(circle3);    
       console.log("Area:", circle3.getarea()); 
       console.log("Circumference:", circle3.getcirumference());
*/
//OUTPUT
circle1
{_radius= 10, _color= 'green' }
Area: 314.1592653589793
Circumference: 62.83185307179586
circle2
{ _radius= 20, _color ='pink' }
Area: 1256.6370614359173
Circumference: 125.66370614359172
circle3
{radius= 30, _color ='white' }
Area: 2827.4333882308138
Circumference: 188.49555921538757

//

