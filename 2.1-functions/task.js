"use strict";
// Задача №1. Корни квадратного уравнения
function getSolutions(a,b,c){
    let D = b ** 2 - 4 * a * c;
    let x1, x2;
        if (D < 0) {
        return { 
            D: D,
            roots: [ ]
        };

        } if (D == 0) {
        x1 = (-b) / (2 * a);
        return { 
            D: D,
            roots: [x1]
        };

        } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a),
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { 
            D: D,
            roots: [x1, x2]
        };
        }
};

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log("Значение дискриминанта: ${result.D}");

    if (result.D < 0) {
         console.log(`Уравнение не имеет вещественных корней`);

    } if (result.D == 0) {
    console.log("Уравнение имеет один корень X₁ = ${result.roots[0]}");

    } else {
         console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
};

// Задача №2. Журнал успеваемости
function getAverageMark(marks) {
    if (marks.length == 0) {
      return 0;
    };
      let sumOfMarks = 0;
      for (let i = 0; i < marks.length; i++) {
            sumOfMarks += marks[i]; 
      }
      
      let averageMark = sumOfMarks / marks.length;
        return averageMark;
    };
  
  
  function getAverageScore(data) {  
    if (data == {}) {
      return {
      average: 0
     }
    } 

    let arrayOfMarks = { };

    for (let key in data)  {
      arrayOfMarks[key] = getAverageMark(data[key]);
    };

    arrayOfMarks.average = getAverageMark(Object.values(arrayOfMarks));
    console.log(getAverageMark(Object.values(arrayOfMarks)));
     return arrayOfMarks;
   };
  

// Задача №3. Расшифровка данных
function getPersonData(secretData) {
    let piratsNames = {
        firstName: getDecodedValue(secretData.aaa), 
        lastName: getDecodedValue(secretData.bbb)
        }
    return piratsNames;
     };
    
     function getDecodedValue(secret) {
     if (secret == 1) {
       return ("Эмильо");
     } if (secret === 0) 
      return ("Родриго"); 
     };
    