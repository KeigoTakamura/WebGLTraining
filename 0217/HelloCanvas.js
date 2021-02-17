//はじめてのWebGLわくわく

function main(){
    var VSHAADER_SOURCE = 
    ' void main() {\n ' +
    'gl_Position =  vec4(0.0,0.0,0.0,1.0); \n' +
    'gl_PointSize = 10.0;\n' +
    '}\n';

    var FSHA_SOURCE =
        'void main(){\n'+
        'gl_FragColor = vec4(0.0,0.0,0.0,1.0); \n' +
        '}\n';


    var canvas = document.getElementById('webgl');
    var gl = canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if(!gl){
        console.log('WebGLコンテキストが取れなかった');
        return;
    }
    
    gl.clearColor(1.0,0, 0.0, 0.9);

    //Canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
}