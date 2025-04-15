function take (val){
document.getElementById("inp").value +=val;
}

function solve (){
    var x = document.getElementById("inp").value ;
    var y = eval(x)
    document.getElementById("inp") .value=y;
    }

    function clr(){
        document.getElementById("inp").value = " ";
        }