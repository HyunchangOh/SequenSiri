
//this part will execute the functions only after document has fully loaded
$(document).ready(function(){
    Enterpressed();
    analyse();
    calculateTm();
    seqlength();
    checkvalid();
});

//If enter is pressed in the input box, the 'analyse' button will be pressed
function Enterpressed(){
    var inputbox = document.getElementById("inputseq");
    inputbox.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13 && input.value!==""){
            document.getElementById("analyse").click();
        }
    },false);
}

//when anlyse button is pressed, calculate and show the GCcontent
function analyse(){
    $("#analyse").click(function(){
        var input = document.getElementById("inputseq").value;
        var Gnum = (input.toLowerCase().match(/g/g)||[]).length;
        var Cnum = (input.toLowerCase().match(/c/g)||[]).length;
        var GCnum = Gnum+Cnum;
        if(input.length===0){
            document.getElementById("answer").innerHTML = "please input a sequence and then analyse";
        }
        var GCcontent = (GCnum)/(input.length)*100;
        document.getElementById("answer").innerHTML = GCcontent + "%";
    })
}

// when Tm button is pressed, calculate and show the Tm value
function calculateTm(){
    $("#tm").click(function(){
        var input = document.getElementById("inputseq").value;
        var Gnum = (input.toLowerCase().match(/g/g)||[]).length;
        var Cnum = (input.toLowerCase().match(/c/g)||[]).length;
        var Anum = (input.toLowerCase().match(/a/g)||[]).length;
        var Tnum = (input.toLowerCase().match(/t/g)||[]).length;
        

        if(input.length<=13){
            var tm = (Anum+Tnum)*2 + (Gnum + Cnum)*4;
        }

        if(input.length>13){
            var tm=64.9+41*(Gnum+Cnum-16.4)/(input.length);
        }
        document.getElementById("answer").innerHTML = "Tm is " + tm + " oC";
    })
}


// when length? button is pressed, calculate and show the length of the sequence
function seqlength(){
    $("#seqlen").click(function(){
        var input = document.getElementById("inputseq").value;
        document.getElementById("answer").innerHTML = "Length is " + input.length;
    })
}

// check valid

function checkvalid(){
    $("#checkvalid").click(function(){
        var input = document.getElementById("inputseq").value;
        var Gnum = (input.toLowerCase().match(/g/g)||[]).length;
        var Cnum = (input.toLowerCase().match(/c/g)||[]).length;
        var Anum = (input.toLowerCase().match(/a/g)||[]).length;
        var Tnum = (input.toLowerCase().match(/t/g)||[]).length;
        var Nnum = (input.match(/n/i)||[]).length;

        if(input.length!=Gnum+Cnum+Anum+Tnum+Nnum){
            document.getElementById("answer").innerHTML = "There are invalid Characters (other than ATCG)";
        }
        else{
            document.getElementById("answer").innerHTML = "Yes This is a Valid Sequece";
        }
    })
}