var age=prompt("introduce tu edad");

if(age==='' || Number(age)===0 || !(age % 1 === 0)||isNaN(Number(age)) ) {
     alert('no es un numero valido');
    //console.log('no es un numero valido');

}else {
    if(age >= 1 && age <= 3){
        alert('toddler');
    }
    else if(age > 3 && age <= 5){
        alert('preschooler');
    }
    
    else if(age > 5 && age <= 12){
     alert('gradeschooler')
    }
    else if(age > 12 && age <= 18){
     alert('teenager');
    }
    else if (age > 18 && age <= 21){
     alert('young adult');
    }
    else{
     alert('adult');
    }
}

