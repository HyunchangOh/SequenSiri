
//this part will execute the functions only after document has fully loaded
$(document).ready(function(){
        EnterPressed();
        analyse();
        calculateTm();
        seqlength();
        checkValid();
        PrintLongestPalindrome();
        printFirstProtein();
        printSecondProtein();
        printThirdProtein();
    

});

//If enter is pressed in the input box, the 'analyse' button will be pressed
function EnterPressed(){
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
//process input
function processInput(){
    var input = document.getElementById("inputseq").value;
    input = input.replace(/\s/g,''); 
    input = input.toUpperCase();
    window.input=input;
}

// when length? button is pressed, calculate and show the length of the sequence
function seqlength(){
    $("#seqlen").click(function(){
        var input = document.getElementById("inputseq").value;
        document.getElementById("answer").innerHTML = "Length is " + input.length;
    })
}

// check valid

function checkValid(){
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


//check if palindrome

function is_Palindrome(str) {
    var rev = str.split("").reverse().join("");
    return str == rev;
}

//returns longest palindromic substring in a string input str1.
//This function assumes there is one single longest palindromic substring.
function longest_palindrome(str){
    longest = '';

    for(var i=0; i < str.length; i++){
    var substring = str.substr(i, str.length);

        for(var j=substring.length; j>=0; j--){
            var substring_of_substring= substring.substr(0, j);
            if (is_Palindrome(substring_of_substring)){
                if (substring_of_substring.length > longest.length){
                    longest = substring_of_substring;
                }
            }
        }
    }
return longest;
}

function PrintLongestPalindrome(){
    $("#long").click(function(){
        var input = window.input;
        input = input.replace(/\s/g,''); 
        document.getElementById("answer").innerHTML = longest_palindrome(input);
    })
}

function FirstFrameProtein(str){
 
    let res = "";
    str.match(/.{1,3}/g).forEach(s => {
        var key = Object.keys(codon).filter(x => codon[x].filter(y => y === s).length > 0)[0];
        res += key != undefined ? key : '';
    })

    document.getElementById("answer").innerHTML = res;
}

function printFirstProtein(){  
    $("#toProtein").click(function(){
        processInput(); 
        FirstFrameProtein(input);
    })
}

function printSecondProtein(){  
    $("#toProtein2").click(function(){
        processInput();
        var input2=window.input.substr(1,input.length);
        FirstFrameProtein(input2);
    })
}

function printThirdProtein(){  
    $("#toProtein3").click(function(){
        processInput();
        var input2=window.input.substr(2,input.length);
        FirstFrameProtein(input2);
    })
}

//check protein validity by checking if there are both start codon and stop codon

//get complementary strand

//