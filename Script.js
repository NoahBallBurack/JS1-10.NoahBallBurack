//write first method
function sleep_in(weekday,vacation) {
    if (weekday == false || vacation == true) {
        return true;
    }else{
        return false;
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile==true&&b_smile==true){
        return true;
    }else {
        if (a_smile == false && b_smile == false) {
            return true;
        }else {
            return false;
        }
    }
}

function string_times(string, integer){
    if(integer==0){
        return "";
    }
    var result=string;
    for(var i=1;i<integer;i++){
        result+=string;
    }
    return result;
    if(integer==0){
        return "";
    }
}

function front_times(string, integer){
    var text = string.substring(0,3);
    if(integer==0){
        return "";
    }
    var result=text;
    for(var i=1;i<integer;i++){
        result+=text;
    }
    return result;
    if(integer==0){
        return "";
    }
}

function string_bits(string){
    var text="";
    for(var i=0;i<=string.length;i=i+2){
        text=text+string.charAt(i);
    }
    return text;
}

function caughtSpeeding(speed, birthday){
    var noTicket=60;
    var smallTicket=80;
    var bigTicket=81;
    if(birthday==true){
        noTicket+=5;
        smallTicket+=5;
        bigTicket+=5;
    }
    if(speed>smallTicket){
        return 2;
    }
    if(speed>noTicket){
        return 1;
    }
    return 0;
}

function fizz_buzz(int){
    var divisibleByThree = false;
    if(int%3==0){
        divisibleByThree=true;
    }
    var divisibleByFive=false;
    if(int%5==0){
        divisibleByFive=true;
    }
    if(divisibleByThree==true&&divisibleByFive==true){
        return "FizzBuzz";
    }else{
        if(divisibleByFive==true){
            return "Buzz";
        }else{
            if(divisibleByThree==true){
                return "Fizz"
            }else{
                return int+"!";
            }
        }
    }
}

function teaParty(tea, candy){
    if(tea<5||candy<5){
        return 0;
    }
    if(tea>=(2*candy)){
        return 2;
    }
    if(candy>=(2*tea)){
        return 2;
    }else{
        return 1;
    }
}

function blackjack(first, second){
    if(first>second&&first<=21){
        return first;
    }
    if(second>first&&second<=21){
        return second;
    }
    if(first==second&&first<=21){
        return first;
    }
    if(first<=21){
        return first;
    }
    if(second<=21){
        return second;
    }else{
        return 0;
    }
}

function loneSum(a, b, c){
    if(a!=b&&b!=c&&a!=c){
        return a+b+c;
    }
    if(a==b&&a!=c){
        return c;
    }
    if(a==c&&a!=b){
        return b;
    }
    if(a==b&&b==c){
        return 0;
    }else{
        return a;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times('Hi', 7);
    document.getElementById("output").innerHTML += front_times('Hello', 20);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(70, false);
    document.getElementById("output").innerHTML += fizz_buzz(20);
    document.getElementById("output").innerHTML += teaParty(6, 8);
    document.getElementById("output").innerHTML += blackjack(19, 21);
    document.getElementById("output").innerHTML += loneSum(1, 2, 3);
}
