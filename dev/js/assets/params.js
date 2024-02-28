// function getParameterByName(name, url) {
//     if (!url) {
//         url = window.location.href;
//     }
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }


// function updateTextElement() {
//     var helloValue = getParameterByName('hello');
//     var textElement = document.getElementById('textElement');
//     if (helloValue) {
//         textElement.textContent = helloValue + " your password is happydev";
//     }
// }

function getParametersByName(names, url) {
    if (!url) {
        url = window.location.href;
    }

    var parameterValues = {};

    names.forEach(function (name) {
        var paramName = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);

        if (results) {
            if (!results[2]) {
                parameterValues[name] = '';
            } else {
                parameterValues[name] = decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
        }
    });

    return parameterValues;
}

function updateTextElement() {
    var parameterNames = ['hello', 'guest']; // Add more parameter names as needed
    var parameterValues = getParametersByName(parameterNames);

    var textElement = document.getElementById('textElement');

    if (parameterValues['hello']) {
        textElement.textContent = parameterValues['guest'] + " your password is happydev";
    }


    // You can similarly handle other parameters like 'anotherparam' here.
}