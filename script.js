const calculatorScreen = document.getElementById('screen');
const buttonPressed = document.querySelectorAll('.calcInputButtons');
var numberStore = 0;
var numberStoreB = 0;
var operatorStore = '';
var used = 0;
    buttonPressed.forEach(element => {
        element.addEventListener('click', function handleClick(event){
            if(numberStore == 0) {
                switch (element.id) {
                    case 'C':
                        calculatorScreen.innerText = '';
                        numberStore = 0;
                        numberStoreB = 0;
                        operatorStore = '';
                        used = 0;
                        break;
                    case '/':
                        numberStore = parseInt(calculatorScreen.innerText);
                        calculatorScreen.innerText = '';    
                        operatorStore = element.id;
                        break;
                    case '*':
                        numberStore = parseInt(calculatorScreen.innerText);
                        calculatorScreen.innerText = '';
                        operatorStore = element.id;
                        break;
                    case '+':
                        numberStore = parseInt(calculatorScreen.innerText);
                        calculatorScreen.innerText = '';
                        operatorStore = element.id;
                        break;
                    case '-':
                        numberStore = parseInt(calculatorScreen.innerText);
                        calculatorScreen.innerText = '';
                        operatorStore = element.id;
                        break;
                    
                    default:
                        if (used != 0){
                            calculatorScreen.innerText = '';
                            calculatorScreen.innerText += element.id;
                            used = 0;
                        } else {
                            calculatorScreen.innerText += element.id;
                        }
                        break;
                }
            } else if (numberStore != 0) {
                var result = 0;
                switch (element.id) {
                    case 'C':
                        calculatorScreen.innerText = '';
                        numberStore = 0;
                        numberStoreB = 0;
                        operatorStore = '';
                        used = 0;
                        break;
                    case '=':
                        used = 1;
                        numberStoreB = parseInt(calculatorScreen.innerText);
                        calculatorScreen.innerText = '';
                        switch (operatorStore){
                            case '/':
                                result = (numberStore/numberStoreB);
                                calculatorScreen.innerText = result;
                                numberStore = 0;
                                numberStoreB = 0;
                                break;
                            case '*':
                                result = numberStore*numberStoreB;
                                calculatorScreen.innerText = result;
                                numberStore = 0;
                                numberStoreB = 0;
                                break;
                            case '+':
                                result = (numberStore + numberStoreB);
                                calculatorScreen.innerText = result;
                                numberStore = 0;
                                numberStoreB = 0;
                                break;
                            case '-':
                                result = numberStore-numberStoreB;
                                calculatorScreen.innerText = result;
                                numberStore = 0;
                                numberStoreB = 0;
                                break;
                        }
                    case '/':
                        break;
                    case '*':;
                        break;
                    case '+':
                        break;
                    case '-':
                        break;
                    default:
                        calculatorScreen.innerText += element.id;
                        break;
                }
            }
            
        });
        });