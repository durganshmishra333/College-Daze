// window.onload = disabel();
function disable(){
    document.getElementById("23").disabled = true;
    document.getElementById("45").disabled = true;
}

var solution =[
    // ['6','9','5','4','7','1','3','2','8'],
    // ['3','4','2','8','1','5','9','6','7'],
    // ['9','7','3','6','2','4','1','8','5'],
    // ['5','6','9','3','8','7','2','4','1'],
    // ['2','8','6','5','9','3','7','1','4'],
    // ['7','5','4','1','3','8','6','9','2'],
    // ['4','2','1','7','5','6','8','3','9'],
    // ['1','3','8','2','4','9','5','7','6'],
    // ['8','1','7','9','6','2','4','5','3'],

[3,9,6,4,7,5,2,1,8],
[5,2,1,6,8,9,7,3,4],
[6,3,8,7,9,1,5,4,2],
[4,1,7,2,5,6,3,8,9],
[1,5,4,8,2,3,9,6,7],
[7,4,9,5,1,8,6,2,3],
[2,8,5,3,6,7,4,9,1],
[8,6,2,9,3,4,1,7,5],
[9,7,3,1,4,2,8,5,6]

];
var c=0;
function checker(){
    for(var i=1;i<10;i++)
    {
        for(var j=1;j<10;j++)
        {
            if(document.getElementById(i*10+j).value==solution[i-1][j-1])
            {c++;}
        }
    }


document.getElementById("demo").innerHTML = "number of crt solutions are" + c;
}