var ctx; //描画用コンテキスト

function main(){
    var canvas  = document.getElementById(`example`);

    if(!canvas){
        console.log("きゃんばすないよ");
        return;
    }

    ctx = 
    canvas.getContext('2d');
    canvas.onmousedown = click;
}

function click(ev){
    var SIZE = 10;
    var x = ev.clientX;
    var y = ev.clientY;

    ctx.fillRect(x,y,SIZE,SIZE);
}