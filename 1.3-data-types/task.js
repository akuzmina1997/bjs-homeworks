function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (!Number(percent))  {
        return("Параметр \"Процентная ставка\" содержит неправильное значение " + percent);
    }

    if (!Number(amount)) {
        return(`Параметр "Сумма кредита" содержит неправильное значение ${amount}`);
    } 

    if (!Number(contribution) && Number(contribution) != 0) {
        return(`Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`);
    }

    let totalMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let creditBody = amount - contribution;
    let monthlyPayment = creditBody * (((percent / 100) / 12) + ((percent / 100) / 12) / (((1 + ((percent / 100) / 12)) ** totalMonths) - 1));
    let totalAmount = + (totalMonths * monthlyPayment).toFixed(2);

    return totalAmount; // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name === null
        ||  !name ) {
        name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;// return greeting;
}