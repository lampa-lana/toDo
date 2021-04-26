'use strict';

function setCookie(key, value, year, month, day, path, domain, secure) {
  let cookieStr = encodeURI(key) + '=' + encodeURI(value);
  if (year) {
    const expires = new Date(year, month, day-30);
    cookieStr += '; expires=' + expires.toGMTString();
  }
  cookieStr += path ? '; path=' + encodeURI(path) : '';
  cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
  cookieStr += secure ? '; secure' : '';
  document.cookie = cookieStr;
  

}
 

setCookie('Любимый праздник у детей', 'Новый год! ', 2022, 1, 1);

console.log(decodeURI(document.cookie)); 
 document.cookie = 'имя=значение';
document.cookie = 'имя2=значение2';
document.cookie = 'имя3=значение3';
document.cookie = 'имя=значение4';

document.cookie = 'hope=life; expires=Tue, 7 May 2024 00:00:00 GMT'; 
 console.log(document.cookie.slice(', ')); 




const inputText = document.getElementById('myText'),
  myBtn = document.getElementById('myBtn'),
  text = document.getElementById('text');

const showText = function () {
  text.textContent = localStorage.getItem('memory');// метод getItem для получения нового значения
}

myBtn.addEventListener('click', function () {
  localStorage.setItem('memory', inputText.value); // метод setItem для записи нового значения
  showText();
});
showText();

/* localStorage.removeItem('myText');  */


/* myBtn.addEventListener('click', function () {
  localStorage.myText = inputText.value;
  showText();
});
showText(); */