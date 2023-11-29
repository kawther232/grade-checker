document.querySelector('form').addEventListener('submit', checkGrade)

function checkGrade(e) {   
    e.preventDefault();

    let myGrade= document.querySelector('input').value;

    let message = "";

    console.log('RUNNING...'+myGrade);


    if(myGrade >= 90){
       message+= `<li>A<li/>`;
    }


    if(myGrade >= 80 && myGrade < 90){
        message+=`<li>B<li/>`;
    }
    
    

    if(myGrade >= 70 && myGrade<80){
       message += `<li>C<li/>`;
    }



    if(myGrade>= 60  && myGrade<70){
        message +=`<li>D<li/>`;
    }

    if(myGrade<= 50  && myGrade<60){
        message +=`<li>F<li/>`;
    }

   
    document.querySelector('#output').innerHTML = message;
}
//checkAge(45);
//checkAge(6);
//checkAge(14);
//checkAge(6);