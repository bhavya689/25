function keyPressed(){
    if(keyCode === UP_Arrow){


        Matter.body.applyForce(paperObject.body,paperobject.body.position,{x:130,y:-14});


    
    }
}