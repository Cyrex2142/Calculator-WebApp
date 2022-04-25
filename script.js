const calculatorScreen = document.getElementById('screen');
const buttonPressed = document.querySelectorAll('.calcInputButtons');
var numberStore ;
    buttonPressed.forEach(element => {
        element.addEventListener('click', function handleClick(event){
            switch (element.id) {
                case 'C':
                    calculatorScreen.innerText = '';
                    break;
                case '/':
                    numberStore = calculatorScreen.innerText;
                    calculatorScreen.innerText = element.id;
                    console.log(numberStore);
                    break;
                case '*':
                    numberStore = calculatorScreen.innerText;
                    calculatorScreen.innerText = element.id;
                    console.log(numberStore);
                    break;
                case '+':
                    numberStore = calculatorScreen.innerText;
                    calculatorScreen.innerText = element.id;
                    console.log(numberStore);
                    break;
                case '-':
                    numberStore = calculatorScreen.innerText;
                    calculatorScreen.innerText = element.id;
                    console.log(numberStore);
                    break;
                default:
                    calculatorScreen.innerText += element.id;
                    break;
            }
            
        });
        });