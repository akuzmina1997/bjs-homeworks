"use strict"

//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    let phrase = this.toUpperCase();
    for (let i = 0; i <= phrase.length / 2; i++) {
      if (phrase[i] === phrase[phrase.length - 1 - i]) {
        return true;
      } return false
    }
  };

console.log("А роза упала на лапу Азора".isPalindrome());

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    }

    else {
        let sum = 0;
        for (let i=0; i < marks.length; i++) {
            sum += marks[i];
        }

        const average = sum / marks.length;
        const roundedAverage = Math.round(average);

    return averageMark; // return averageMark 
    }
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = Date.now();

    const diff = now - Number(new Date(birthday));
    const age = diff / 31557600000;
    const verdict = (age > 18 ? true : false);

    return verdict; // return verdict
}