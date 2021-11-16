canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add()
{
background_imgTag=new Image();
background_imgTag.onload=upload_background;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=upload_rover;
rover_imgTag.src=rover_image;
}

function upload_background(){
ctx.drawImage(background_imgTag ,0, 0, canvas.width, canvas.height);

}

function upload_rover(){
ctx.drawImage(rover_imgTag ,0, 0, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
key_pressed=e.keyCode;
console.log(key_pressed);

if(key_pressed=="38")
{
up();
console.log("up");
}
if(key_pressed=="40")
{
down();
console.log("down");
}
if(key_pressed=="37")
{
left();
console.log("left");
}
if(key_pressed=="39")
{
right();
console.log("right");
}


}

function up()
{
    if(rover_y >=0)
{
    rover_y = rover_y -10;

    console.log ("When arrow up is pressed rover_x= " +rover_x+ "y="+ rover_y);
upload_background();
    upload_rover();

}
}

function down()
{
    if(rover_y  <= 500)
{
rover_y = rover_y +10;
console.log("When arrow down is pressed rover_x= " +rover_x + "y =" + rover_y);
upload_background();
    upload_rover();

}
}

function left()
{
    if(rover_x >= 0)
{
rover_x = rover_x -10;
console.log("When arrow down is pressed rover_x= " +rover_x + "y =" + rover_y);
upload_background();
    upload_rover();

}
}
function right()
{ 
    if(rover_x <= 700)
{
rover_x = rover_x +10;
console.log("When arrow down is pressed rover_x= " +rover_x + "y= " + rover_y);
upload_background();
    upload_rover();

}
}