//三角形を書きたい

function main(){
    var canvas = document.getElementById('example');

    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    var ctx = canvas.getContext('2d');

    //三角形を書く

    ctx.beginPath();
    ctx.moveTo(120,10);
    ctx.lineTo(200,150);
    ctx.lineTo(40,150);
    
    ctx.closePath();

    ctx.fillStyle = 'rgba(255,0,0,1.0)';
    ctx.stroke();
}