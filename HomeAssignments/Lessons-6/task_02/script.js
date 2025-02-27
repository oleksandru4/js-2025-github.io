if (confirm('Почати тестування?')) {
    let renderAnswer = '';
    do{
        let userNumber = parseFloat(prompt('Введіть число для піднесення його в квадрат', 1));
        console.log(userNumber);
        if (isNaN(userNumber))
            break;
        renderAnswer = `${userNumber} в квадраті = ${Math.pow(userNumber, 2)} \n Продовжуєм?`
    } while (confirm(renderAnswer));
}