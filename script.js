class Calculator{
    constructor(previousOperatorTextElement,currentOperatorTextElement){
        this.previousOperatorTextElement=previousOperatorTextElement
        this.currentOperatorTextElement=currentOperatorTextElement
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const previousOperatorTextElement = document.querySelectorAll('[data-previous-operator]');
const currentOperatorTextElement = document.querySelectorAll('[data-current-operator]');