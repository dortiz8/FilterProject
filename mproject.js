//Global Variables
let image1 = null; 
let image2 = null; 
let image3 = null; 
let image4 = null; 
let image5 = null; 
let canvas = document.getElementById("picCanvas"); 
let input = document.getElementById("mainImage"); 


//Load Image Function 
function loadImage(){ 
   
    image1 = new SimpleImage(input); 
    image2 = new SimpleImage(input); 
    image3 = new SimpleImage(input); 
    image4 = new SimpleImage(input); 
    image5 = new SimpleImage(input); 
    image1.drawTo(canvas); 
}

//Reset Image Function 
function resetImage(){
   
}; 

//filters Function that will take one paramater "image"
function filters(image){
    
    let canvas = document.getElementById("picCanvas");
    for(var pix of image.values()){
        let g = pix.getGreen(); 
        let r = pix.getRed(); 
        let b = pix.getBlue(); 
        let avg = (g + r + b)/3; 

        let x = pix.getX(); 
        let y = pix.getY(); 
        let w = image.width; 
        let h = image.height;
    

        if(image === image1){
            pix.setGreen(avg); 
            pix.setRed(avg); 
            pix.setBlue(avg); 
           

        }else if(image === image2){
           if(avg < 128){
            pix.setRed(avg * 2); 
            pix.setGreen(0); 
            pix.setBlue(0);
           }else{
            pix.setRed(255);
            pix.setGreen((avg*2)-255); 
            pix.setBlue((avg*2)-255); 
           }
          
        }else if(image === image4){
            if(x > w/3 * 2){
                pix.setRed(r*2);
                pix.setGreen(g); 
                pix.setBlue(b); 
            }else if(x > w/3 && x < (w/3 *2)){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)  
            }else if(x < w/3){
                pix.setRed(r) 
                pix.setGreen(g*2) 
                pix.setBlue(b)  
            }

        }else if(image === image5){

            if(x > w/3  && x < w/3 * 2 && y > h/3 && y < h/3 * 2){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)  
            }else if(x > w/3 * 2 && y < h/3){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)
            }else if(x < w/3 &&  y < h/3){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)
            }
            else if(x < w/3 && y > h/3 *2){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)
            }else if(x > w/3 * 2 && y > h/3 * 2){
                pix.setRed(r*2) 
                pix.setGreen(g*2) 
                pix.setBlue(b*2)
            }else{
                pix.setRed(r/2); 
                pix.setGreen(g/2); 
                pix.setBlue(b/2); 
            }
        }
           
}
image.drawTo(canvas); 
 
}
; 

//Iterate through the buttons in buttons Div 

function ButtonFunct(){
    let buttons = document.querySelectorAll("#butDiv input");

for(let i = 0; i<buttons.length; i++){
    let b = buttons[i]; 
    
    b.addEventListener('click', ()=>{
        if (b.id === "red") {
            filters(image2); 
            image2 = new SimpleImage(input); 
        }else if(b.id === "grayscale"){
            filters(image1); 
            image1 = new SimpleImage(input); 
        } else if(b.id === "flag"){
            filters(image4); 
            image4 = new SimpleImage(input); 
        } else if(b.id === "opaque"){
            filters(image5); 
            image5 = new SimpleImage(input); 
        }     

        })
    }
}; 

ButtonFunct(); 


//Reset button
function resetBut(){
    let reset = document.getElementById("reset"); 
    reset.addEventListener("click", ()=>{
        image3.drawTo(canvas); 
    })
   
}; 

resetBut(); 




