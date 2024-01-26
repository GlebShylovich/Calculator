const firstNum = document.querySelector('.firstNum');
const secondNum = document.querySelector('.secondNum');
const operation = document.getElementById('operation');
const resultBox = document.querySelector('.result');
const resultNum = document.createElement('h3');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    const calculator = new Calculator(firstNum.value, secondNum.value, operation.value);
});

class Calculator {
    constructor(a, b, operation) {
        this.a = Number(a);
        this.b = Number(b);
        this.operation = operation;
        if (this.operation === '+') {
            this.plus();
        } else if (this.operation === '-') {
            this.minus();
        } else if (this.operation === '*') {
            this.multiplication();
        } else if (this.operation === '/') {
            this.division();
        }
    }

    plus() {
        resultNum.textContent = this.a + this.b;
        resultBox.append(resultNum);
    }

    minus() {
        resultNum.textContent = this.a - this.b;
        resultBox.append(resultNum);
    }

    multiplication() {
        resultNum.textContent = this.a * this.b;
        resultBox.append(resultNum);
    }

    division() {
        resultNum.textContent = this.a / this.b;
        resultBox.append(resultNum);
    }
}
