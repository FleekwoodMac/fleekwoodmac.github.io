function getParametersByName(e,o){o||(o=window.location.href);var a={};return e.forEach((function(e){var r=e.replace(/[\[\]]/g,"\\$&"),s=new RegExp("[?&]"+r+"(=([^&#]*)|&|#|$)").exec(o);s&&(s[2]?a[e]=decodeURIComponent(s[2].replace(/\+/g," ")):a[e]="")})),a}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),o=document.getElementById("textElement"),a="";switch(!0){case"Alo"===e.hello:a=e.hello+" your password is 700";break;case"Clippers"===e.hello:a=e.hello+" your password is 122";break;case"FabFitFun"===e.hello:a=e.hello+" your password is 133";break;case"Mathnasium"===e.hello:a=e.hello+" your password is 800";break;case"Brilliant Earth"===e.hello:a=e.hello+" your password is 300";break;case"BrilliantEarth"===e.hello:a=e.hello+" your password is 300";break;case"SpaceX"===e.hello:a=e.hello+" Password Expired";break;case"Beyond Yoga"===e.hello:a=e.hello+" your password is 347";break;case"BeyondYoga"===e.hello:a=e.hello+" your password is 347";break;case"Amazon"===e.hello:a=e.hello+" your password is 517";break;case"UTA"===e.hello:a=e.hello+" your password is 177";break;case"Parsec"===e.hello:a=e.hello+" your password is 205";break;case"Fanantics"===e.hello:a=e.hello+" your password is 514";break;case"Apple"===e.hello:a=e.hello+" your password is 555";break;case"Salesforce"===e.hello:a=e.hello+" your password is 607";break;case"TrueLearn"===e.hello:a=e.hello+" your password is 620";break;case"Home Depot"===e.hello:a=e.hello+" your password is 200";break;case"HomeDepot"===e.hello:a=e.hello+" your password is 200";break;case"Microsoft"===e.hello:a=e.hello+" your password is 763";break}o.textContent=a}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),o=document.getElementById("submit-button"),a=document.getElementById("content");o.addEventListener("click",(function(){let o="";switch(e.value){case"122":case"133":case"177":case"205":o="port1.2/24/work.html";break;case"":o="port1.2/24ad/work.html";break;case"300":case"347":o="port1.2/24snrds/work.html";break;case"555":case"607":o="port1.2/24pd/work.html";break;case"517":case"514":case"620":case"200":o="port1.2/24ux/work.html";break;case"700":o="port1.2/24lead/work.html";break;case"800":o="port1.2/24visd/work.html";break;case"mjw":o="port1.2/24mj/work.html";break;case"763":o="port1.2/24pd/work.html";break}o?window.location.href=o+"?v="+Math.random():a.textContent="Incorrect or expired password. Please try again."}))}));