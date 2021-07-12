var last_position_x, last_position_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Pink";
width_of_line = 5;

    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;
    if(width < 992){
        document.getElementById("myCanvas").width= new_width;
        document.getElementById("myCanvas").height= new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart)
    function my_touchstart(e)
    {
        console.log("My_Touchstart")
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove" , my_touchmove)
    function my_touchmove(e)
    {
        console.log("My_Touchmove");
        current_position_of_mouse_x = e.touches[0].clientX - offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
       ctx.strokestyle = color;
       ctx.lineWidth = width_of_line;
    }
