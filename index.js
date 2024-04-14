function countedHB(){
    const dateHB = document.getElementById('input');
    const pp = document.getElementById('paragraf');
    document.getElementById('paragraf').innerHTML = "";
    
    if (dateHB.value == "") 
    {document.getElementById('paragraf').innerHTML += "Дата не заполнена";
    }
    else {
        const currentDate = new Date();
        const timeDifferent = dateHB.valueAsNumber-currentDate.getTime();
        const difference = Math.ceil(timeDifferent/(24*60*60*1000));
        if (difference==1 || difference ==21 || difference==31){document.getElementById('paragraf').innerHTML+= `До Вашего Дня Рождения осталось: ${difference} день`;}
        else if(difference==2 ||difference==3 || difference==4 ){
            document.getElementById('paragraf').innerHTML+= `До Вашего Дня Рождения осталось: ${difference} дня`;
        }
        else if(difference<0 ){
            document.getElementById('paragraf').innerHTML+= `Ваш День Рождения уже прошел`;
        }
        else if(difference==0 ){
            document.getElementById('paragraf').innerHTML+= `С Днём Рождения!`;
        }
        else {document.getElementById('paragraf').innerHTML+= `До Вашего Дня Рождения осталось: ${difference} дней`}
        

    }
}