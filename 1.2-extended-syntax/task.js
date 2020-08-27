function getResult(a,b,c) {
    // код для задачи №1 писать здесь
    let discriminant = (a, b, с) => b ** 2 - 4 * a * c;
    let x = discriminant(a, b, c);
    let x1, x2;

    if (x < 0) {
      return [];
    } if (x == 0) {
      x1 = (-b) / (2 * a);
        return [x1];
    } else {
      x1 = (-b + Math.sqrt(x)) / (2 * a),
      x2 = (-b - Math.sqrt(x)) / (2 * a);
        return [x1, x2];
    }

    return x; // return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length > 5) {
        marks.splice(5);
     console.log("Оценок больше, чем пять - считаются только первые пять"); 

     } if (marks.length == 0) {
         return 0;
     } 

     let sumOfMarks = 0;
      for (let i = 0; i < marks.length; i++) {
             sumOfMarks += marks[i]; 
         }
         let averageMark = sumOfMarks / marks.length;

         return averageMark; // return averageMark;
}

function askDrink(name,dateOfBirthday) {
    // код для задачи №3 писать здесь
    let thisDate = new Date();
    let thisYear = thisDate.getFullYear()
    let yearOfBirth = dateOfBirthday.getFullYear();
    let age =  thisYear - yearOfBirth;
    let result;
    
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return result; // return result;
}