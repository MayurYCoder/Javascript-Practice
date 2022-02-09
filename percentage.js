let Maths=80;
let physics=85;
let history=85;
let english=80;
let geography=80;
 
(function marks(){
    let Total=Maths+physics+history+english+geography;

    let Percentage=Total/5;

    if(Percentage>90){

        console.log("Grade A+");
        console.log("Percentage is:"+Percentage);

    }else if(Percentage>80 && Percentage<90){
        console.log("Grade A");
        console.log("Percentage is:"+Percentage);

    }else if(Percentage>70 && Percentage<80){
        console.log("Grade B+");
        console.log("Percentage is:"+Percentage);

    }else if(Percentage>60 && Percentage<70){
        console.log("Grade B");
        console.log("Percentage is:"+Percentage);

    }else if(Percentage>50 && Percentage<60){
        console.log("Grade C");
        console.log("Percentage is:"+Percentage);

    }else if(Percentage>40 && Percentage<50){
        console.log("Grade D");
        console.log("Percentage is:"+Percentage);

    }else {
        console.log("result is Fail");
        console.log("Percentage is:"+Percentage);

    }
})();

