class Food{
constructor(){
 
    this.food=loadImage("images/Milk.png")
    this.foodStock=0



}
getFoodStock(food){
    this.foodStock=food;
}


display(){
    
    var x=80, y=100;
   
    imageMode(CENTER);
    image(this.food,720, 220, 70, 70);
    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
          x=80;
          y=y+50;
      }
      image(this.food,x,y,50,50);
      x=x+30;
        }
    }
   
}

garden(){
    background(garden, 800, 700)
}

washroom(){
    background(washroom, 800, 700)
}

bedroom(){
    background(bedroom, 800, 700)
}

}



