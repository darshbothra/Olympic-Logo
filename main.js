canvas=document.getElementById("bla");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth=10;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidhth=7;
ctx.arc(250,210,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidhth=7;
ctx.arc(300,260,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidhth=7;
ctx.arc(350,210,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth=7;
ctx.arc(400,260,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidhth=7;
ctx.arc(450,210,40,0,360);
ctx.stroke();
// function Clear_Area()
// {    ctx.clearRect(0,0,800,600);
// }
