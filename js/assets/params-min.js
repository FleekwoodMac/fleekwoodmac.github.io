function getParametersByName(e,a){a||(a=window.location.href);var o={};return e.forEach((function(e){var t=e.replace(/[\[\]]/g,"\\$&"),s=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(a);s&&(s[2]?o[e]=decodeURIComponent(s[2].replace(/\+/g," ")):o[e]="")})),o}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),a=document.getElementById("textElement"),o="";switch(!0){case"Guest"===e.source:o=e.source+" get password below";break;case"Alo"===e.hello:o=e.hello+" your password is 700";break;case"Clippers"===e.hello:o=e.hello+" your password is 122";break;case"FabFitFun"===e.hello:o=e.hello+" your password is 133";break;case"Sand Cloud"===e.hello:o=e.hello+" your password is 147";break;case"SandCloud"===e.hello:o=e.hello+" your password is 147";break;case"sandcloud"===e.hello:o=e.hello+" your password is 147";break;case"Sandcloud"===e.hello:o=e.hello+" your password is 147";break}a.textContent=o}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),o=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"122":case"133":case"147":a="pages/24/work.html";break;case"200":a="pages/24ad/work.html";break;case"300":a="pages/24cd/work.html";break;case"400":a="pages/24xd/work.html";break;case"500":a="pages/24pd/work.html";break;case"700":a="pages/24lead/work.html";break;case"800":a="pages/24visd/work.html";break;case"mjw":a="pages/24mj/work.html";break}a?window.location.href=a+"?v="+Math.random():o.textContent="Incorrect or expired password. Please try again."}))}));