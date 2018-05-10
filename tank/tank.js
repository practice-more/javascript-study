
// extent for tank

var width;
var height;

window.onload=function(){
    width = document.getElementById("border").width
    height = document.getElementById("border").height
}

var x = 50;
var y = 50;

var md_id 
var mu_id
var ml_id
var mr_id

// 
var g_dir = 5
var move = true
speed = 1

document.onkeydown=keydown
document.onkeyup=keyup

// a65 2 
// s83 1 
// w87 0 
// d68 3

function keydown(e){
    var dir = 5
    if(e.keyCode == 65){
        // left
        dir = 2;
        move = true;
    }
    else if(e.keyCode == 83){
        // down
        dir = 1;
        move = true;
    }
    else if(e.keyCode == 87){
        // up
        dir = 0
        move = true
    }
    else if(e.keyCode == 68){
        // right
        dir = 3
        move = true
    }
    tank_action(dir)
}

function tank_action(dir){
    if(dir == 5){
        return;
    }
    else if (dir == 0){
        if(!move){
            clearInterval(mu_id);
            g_dir = 5
        }
        else if(dir != g_dir){
            clean_all()
            mu_id = setInterval(move_up, 10)
        }
    }
    else if (dir == 1){
        if(!move){
            clearInterval(md_id);
            g_dir = 5
        }
        else if(dir != g_dir){
            clean_all()
            md_id = setInterval(move_down, 10)
        }
    }
    else if (dir == 2){
        if(!move){
            clearInterval(ml_id);
            g_dir = 5
        }
        else if(dir != g_dir){
            clean_all()
            ml_id = setInterval(move_left, 10)
        }
    }
    else if (dir == 3){
        if(!move){
            clearInterval(mr_id);
            g_dir = 5
        }
        else if(dir != g_dir){
            clean_all()
            mr_id = setInterval(move_right, 10)
        }
    }
}

function clean_all()
{
    clearInterval(ml_id)
    clearInterval(mr_id)
    clearInterval(mu_id)
    clearInterval(md_id)
}

function keyup(e){
    var dir = 5
    if(e.keyCode == 65){
        // left
        dir = 2;
        move = false;
    }
    else if(e.keyCode == 83){
        // down
        dir = 1;
        move = false;
    }
    else if(e.keyCode == 87){
        // up
        dir = 0
        move = false; 
    }
    else if(e.keyCode == 68){
        // right
        dir = 3
        move = false; 
    }
    tank_action(dir)
}

function move_down(){
    g_dir = 1
    y = y + speed;
    document.getElementById("tank").style.webkitTransform = "rotate(180deg)";
    document.getElementById("tank").style.top = y + "px";
}

function move_up(){
    g_dir = 0
    y = y - speed;
    document.getElementById("tank").style.webkitTransform = "rotate(0deg)";
    document.getElementById("tank").style.top = y + "px";
}

function move_left(){
    g_dir = 2
    x = x - speed
    document.getElementById("tank").style.webkitTransform = "rotate(-90deg)";
    document.getElementById("tank").style.left = x + "px";
}

function move_right(){
    g_dir = 3
    x = x + speed
    document.getElementById("tank").style.webkitTransform = "rotate(89deg)";
    document.getElementById("tank").style.left = x + "px";

}

function turn_up(){

}



function turn_left(){

}

function turn_down(){

}

function turn_right(){

}

function turnDown(){

}