//хэш - 5753ccff9fddae8896c376e424ebf81a

let hesh = 0x4ebf81a;
var1 = hesh % 600; //определение варианта компании
var2 = hesh % 9; //определение варианта меню
var3 = hesh % 43; //определение варианта валюты

console.log('Компания:', var1); 
console.log('Меню:',var2); 
console.log('Валюта:',var3);

// Новости
function razvNews(){
    let DopText = document.querySelector('.DopText')
    let razv = document.querySelector('.razv')
    let svern = document.querySelector('.svern')

    DopText.style='display:block;';
    razv.style='display:none;';
    svern.style='display:block;';
}
function svernNews(){
    let DopText = document.querySelector('.DopText')
    let razv = document.querySelector('.razv')
    let svern = document.querySelector('.svern')

    svern.style='display:none;';
    DopText.style='display:none;';
    razv.style='display:block;';
}

// Курс Валют
function cursVND(){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    fetch (url)
        .then( function(response){
            return response.json();
        })
        .then( function(json){
            console.log(json);
            
            let VND = json.Valute.VND.Value / 10000;
            console.log(VND);

            let val = document.getElementById('val');
            let currency1 = document.getElementById('curs1');
            let currency2 = document.getElementById('curs2');
            let result = document.querySelector('.result');

            if (currency1.value == 'VND'){
                result.value =  val.value * VND;
            }
            else if (currency1.value == 'RUB'){
                result.value =  val.value * (1/VND);
            }
        })
}
