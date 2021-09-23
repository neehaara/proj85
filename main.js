canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car_width=95;
car_height=120;
car_x=565;
car_y=150;

blue_car_x=465;
blue_car_y=150;

white_car_x=350;
white_car_y=150;

black_car_x=230;
black_car_y=150;

orange_car_x=130;
orange_car_y=150;

cyan_car_x=565;
cyan_car_y=310;

sports_car_x=465;
sports_car_y=310;

taxi_x=350;
taxi_y=310;

white_taxi_x=230;
white_taxi_y=310;

background_image="parking_lot.png";
car="car.png";

function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;


car_imgTag=new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src=car;

white_car="car2.jpg";
white_car_imgTag=new Image();
white_car_imgTag.onload=uploadwhiteCar;
white_car_imgTag.src=white_car;

blue_car="car3.jpg";
blue_car_imgTag=new Image();
blue_car_imgTag.onload=uploadblueCar;
blue_car_imgTag.src=blue_car;

black_car="car4.jpg";
black_car_imgTag=new Image();
black_car_imgTag.onload=uploadblackCar;
black_car_imgTag.src=black_car;

orange_car="car5.jpg";
orange_car_imgTag=new Image();
orange_car_imgTag.onload=uploadorangeCar;
orange_car_imgTag.src=orange_car;

cyan_car="car6.jpg";
cyan_car_imgTag=new Image();
cyan_car_imgTag.onload=uploadcyanCar;
cyan_car_imgTag.src=cyan_car;


sports_car="car7.jpg";
sports_car_imgTag=new Image();
sports_car_imgTag.onload=uploadsportsCar;
sports_car_imgTag.src=sports_car;

taxi="car8.png";
taxi_imgTag=new Image();
taxi_imgTag.onload=uploadTaxi;
taxi_imgTag.src=taxi;

white_taxi="car9.png";
white_taxi_imgTag=new Image();
white_taxi_imgTag.onload=uploadwhiteTaxi;
white_taxi_imgTag.src=white_taxi;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadblueCar(){
    ctx.drawImage(blue_car_imgTag,blue_car_x,blue_car_y,car_width,car_height)
}

function uploadwhiteCar(){
    ctx.drawImage(white_car_imgTag,white_car_x,white_car_y,car_width,car_height)
}

function uploadblackCar(){
    ctx.drawImage(black_car_imgTag,black_car_x,black_car_y,car_width,car_height)
}

function uploadorangeCar(){
    ctx.drawImage(orange_car_imgTag,orange_car_x,orange_car_y,car_width,car_height)
}

function uploadcyanCar(){
    ctx.drawImage(cyan_car_imgTag,cyan_car_x,cyan_car_y,car_width,car_height)
}

function uploadsportsCar(){
    ctx.drawImage(sports_car_imgTag,sports_car_x,sports_car_y,car_width,car_height)
}

function uploadTaxi(){
    ctx.drawImage(taxi_imgTag,taxi_x,taxi_y,car_width,car_height)
}

function uploadwhiteTaxi(){
    ctx.drawImage(white_taxi_imgTag,white_taxi_x,white_taxi_y,car_width,car_height)
}

function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height)
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("up");
}

if(keyPressed=='40'){
    down();
    console.log("down");
}

if(keyPressed=='37'){
    left();
    console.log("left");
}

if(keyPressed=='39'){
    right();
    console.log("right");
}
}

function up(){
    if(car_y>=0){
        car_y=car_y-10;
        console.log("When up arrow is pressed x= " + car_x + " y= " + car_y);
        uploadBackground();
        uploadCar();
        uploadblueCar();
        uploadwhiteCar();
        uploadblackCar();
        uploadorangeCar();
        uploadcyanCar();
        uploadsportsCar();
        uploadTaxi();
        uploadwhiteTaxi();
    }
}

function down(){
    if(car_y<=600){
        car_y=car_y+10;
        console.log("When down arrow is pressed x= " +car_x + " y= " + car_y);
        uploadBackground();
        uploadCar();
        uploadblueCar();
        uploadwhiteCar();
        uploadblackCar();
        uploadorangeCar();
        uploadcyanCar();
        uploadsportsCar();
        uploadTaxi();
        uploadwhiteTaxi();
    }
}

function left(){
    if(car_x>=0){
        car_x=car_x-10;
        console.log("When left arrow is pressed x= "+car_x+" y= " +car_y);
        uploadBackground()
        uploadCar();
        uploadblueCar();
        uploadwhiteCar();
        uploadblackCar();
        uploadorangeCar();
        uploadcyanCar();
        uploadsportsCar();
        uploadTaxi();
        uploadwhiteTaxi();
    }
}

function right(){
    if(car_x<=800){
        car_x=car_x+10;
        console.log("When right arrow is pressed x= "+car_x+" y= "+car_y);
        uploadBackground();
        uploadCar();
        uploadblueCar();
        uploadwhiteCar();
        uploadblackCar();
        uploadorangeCar();
        uploadcyanCar();
        uploadsportsCar();
        uploadTaxi();
        uploadwhiteTaxi();
    }
}