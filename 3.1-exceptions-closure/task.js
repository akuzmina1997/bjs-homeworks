//задание 1
//функция parseCount
function parseCount(input) {
    const result = Number.parseInt(input);

    if (isNaN(result)) {
        const errorNaN = new Error("Значение ошибочно");
        throw errorNaN;
    }

    return result;
}

//функция validateCount
function validateCount(input) {
    //Если распарсить удаётся успешно, то возвращайте результат
    try { 
        return parseCount(input);
    }

    //Возвращайте ошибку из функции в случае перехвата исключения
    catch(e) { 
        return (new Error ("Значение ошибочно"));
    }
}

//задание 2
//класс Triangle
class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

    //В случае нарушения правила существования треугольника (сумма двух сторон меньше третьей) выбрасывайте исключение с ошибкой "Треугольник с такими сторонами не существует"
        if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b)
            throw new Error ("Треугольника с такими сторонами не существует");
}

//Метод getPerimeter должен возвращать периметр треугольника
getPerimeter() {
    return this.a + this.b + this.c;
  };

//Метод getArea должен возвращать площадь треугольника (формула Герона)
getArea() {
    const p = (this.getPerimeter() / 2);
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +square.toFixed(3);
    }

}

//функция getTriangle
const getTriangle = (a, b, c) => {
    try {
      return new Triangle(a, b, c);
    
//В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
    } catch (e) {
        return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует",
        };  
    } 
};