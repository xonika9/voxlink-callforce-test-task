// v1.4
'use strict';

const assert = require('assert').strict;

{
  // TEST 4.1
  // todo: Написать код для получения собственных ключей объекта obj

  function getPropNames(obj) {
    return Object.keys(obj);
  }

  {
    const result = getPropNames({
      prop1: 111,
      prop2: 222,
      prop3: 333,
    });
    assert.deepEqual(result, ['prop1', 'prop2', 'prop3'], 'Test failed');
  }
  {
    const result = getPropNames({
      prop1: 111,
      customProp: 222,
    });
    assert.deepEqual(result, ['prop1', 'customProp'], 'Test failed');
  }
  {
    const result = getPropNames(
      Object.setPrototypeOf(
        Object.defineProperty(
          {
            myProp: 111,
            anotherProp: 222,
            oneMoreProp: 333,
          },
          'lastProp',
          {
            value: 333,
            enumerable: true,
          }
        ),
        {
          nonObjectProp: 'test',
        }
      )
    );
    assert.deepEqual(
      result,
      ['myProp', 'anotherProp', 'oneMoreProp', 'lastProp'],
      'Test failed'
    );
  }
}

{
  // TEST 4.2
  // todo: Написать код для получения собственных ключей объекта obj, но без свойства skip_this_prop.

  function getPropNames(obj) {
    return Object.keys(obj).filter((key) => key !== 'skip_this_prop');
  }

  {
    const obj = {
      prop1: 111,
      prop2: 222,
      prop3: 333,
      skip_this_prop: 444,
      __proto__: {
        nonObjectProp: 'test',
      },
    };
    const result = getPropNames(obj);

    assert.deepEqual(result, ['prop1', 'prop2', 'prop3'], 'Test failed');
    assert.deepEqual(obj.skip_this_prop, 444, 'Test failed');
  }
}

{
  // TEST 4.3
  // todo: Написать код для получения собственных значений объекта obj

  function getPropValues(obj) {
    return Object.keys(obj).map((key) => obj[key]);
  }

  {
    const result = getPropValues({
      prop1: 111,
      prop2: 222,
      prop3: 333,
    });
    assert.deepEqual(result, [111, 222, 333], 'Test failed');
  }
  {
    const result = getPropValues({
      prop1: 1,
      customProp: 'MyVal',
    });
    assert.deepEqual(result, [1, 'MyVal'], 'Test failed');
  }
  {
    const result = getPropValues(
      Object.defineProperties(
        {
          myProp: true,
          anotherProp: false,
          oneMoreProp: 42,
          lastProp: 'value',
          __proto__: {
            test: 123,
          },
        },
        {
          prop1: {
            value: 123,
            enumerable: false,
          },
          prop3: {
            value: 42,
          },
          prop2: {
            value: 'value',
            configurable: false,
          },
        }
      )
    );
    assert.deepEqual(result, [true, false, 42, 'value'], 'Test failed');
  }
}

{
  // TEST 4.4
  // todo: Дополните код для прохождения теста (получение копии объекта без свойств prop1 и prop2). Оператор delete использовать запрещено
  //  !!! Для решения воспользоваться деструктуризацией !!!

  function deleteProps1and2(obj) {
    const { prop1, prop2, ...rest } = obj;
    return rest;
  }

  {
    /** Изначальный объект, передаваемый в deleteProps1and2() */
    const obj = {
      prop1: 111,
      prop2: 222,
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строка ниже - исключение, ее менять не нужно)
    const objCopy = JSON.parse(JSON.stringify(obj));
    /** Итоговый объект, который мы должны получить в результате работы deleteProps1and2() */
    const expectedResult = {
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };

    const result = deleteProps1and2(obj);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.deepEqual(obj, objCopy, 'Test failed');
    assert.notEqual(result, obj, 'Test failed');
  }
  {
    /** Изначальный объект, передаваемый в deleteProps1and2() */
    const obj = {
      prop1: 1,
      customProp: true,
      myProp: '42',
      prop2: '22',
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строка ниже - исключение, ее менять не нужно)
    const objCopy = JSON.parse(JSON.stringify(obj));
    /** Итоговый объект, который мы должны получить в результате работы deleteProps1and2() */
    const expectedResult = {
      customProp: true,
      myProp: '42',
    };

    const result = deleteProps1and2(obj);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.deepEqual(obj, objCopy, 'Test failed');
    assert.notEqual(result, obj, 'Test failed');
  }
}

{
  // TEST 4.5
  // todo: Дополните код для прохождения теста (Вернуть новый объект, содержащий все свойства двух входных объектов.
  //  У входных объектов нет повторяющихся свойств).
  //  !!! Для решения воспользоваться статическим методом класса Object !!!

  function unionObjects(objPart1, objPart2) {
    return Object.assign({}, objPart1, objPart2);
  }

  {
    const objPart1 = {
      prop1: 1,
      prop2: 2,
    };
    const objPart2 = {
      prop3: 3,
      prop4: 4,
      prop5: 5,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строки ниже - исключение, ее менять не нужно)
    const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
    const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
    const expectedResult = {
      prop1: 1,
      prop2: 2,
      prop3: 3,
      prop4: 4,
      prop5: 5,
    };

    const result = unionObjects(objPart1, objPart2);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.notEqual(result, objPart1, 'Test failed');
    assert.notEqual(result, objPart2, 'Test failed');
    assert.deepEqual(objPart1, objPart1Copy, 'Test failed');
    assert.deepEqual(objPart2, objPart2Copy, 'Test failed');
  }
  {
    const objPart1 = {
      myProp: 1,
      anotherProp: '2',
    };
    const objPart2 = {
      additionalProp1: true,
      additionalProp2: 'prop1',
      additionalProp3: false,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строки ниже - исключение, ее менять не нужно)
    const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
    const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
    const expectedResult = {
      myProp: 1,
      anotherProp: '2',
      additionalProp1: true,
      additionalProp2: 'prop1',
      additionalProp3: false,
    };

    const result = unionObjects(objPart1, objPart2);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.notEqual(result, objPart1, 'Test failed');
    assert.notEqual(result, objPart2, 'Test failed');
    assert.deepEqual(objPart1, objPart1Copy, 'Test failed');
    assert.deepEqual(objPart2, objPart2Copy, 'Test failed');
  }
}

{
  // TEST 4.6
  // todo: Дополните код для прохождения теста (Вернуть новый объект, содержащий все свойства двух входных объектов.
  //  У входных объектов нет повторяющихся свойств).
  //  !!! Для решения воспользоваться возможностями ECMAScript2015+ !!!

  function unionObjects(objPart1, objPart2) {
    return { ...objPart1, ...objPart2 };
  }

  {
    const objPart1 = {
      prop1: 1,
      prop2: 2,
    };
    const objPart2 = {
      prop3: 3,
      prop4: 4,
      prop5: 5,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строки ниже - исключение, ее менять не нужно)
    const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
    const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
    const expectedResult = {
      prop1: 1,
      prop2: 2,
      prop3: 3,
      prop4: 4,
      prop5: 5,
    };

    const result = unionObjects(objPart1, objPart2);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.notEqual(result, objPart1, 'Test failed');
    assert.notEqual(result, objPart2, 'Test failed');
    assert.deepEqual(objPart1, objPart1Copy, 'Test failed');
    assert.deepEqual(objPart2, objPart2Copy, 'Test failed');
  }
  {
    const objPart1 = {
      myProp: 1,
      anotherProp: '2',
    };
    const objPart2 = {
      additionalProp1: true,
      additionalProp2: 'prop1',
      additionalProp3: false,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строки ниже - исключение, ее менять не нужно)
    const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
    const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
    const expectedResult = {
      myProp: 1,
      anotherProp: '2',
      additionalProp1: true,
      additionalProp2: 'prop1',
      additionalProp3: false,
    };

    const result = unionObjects(objPart1, objPart2);

    assert.deepEqual(result, expectedResult, 'Test failed');
    assert.notEqual(result, objPart1, 'Test failed');
    assert.notEqual(result, objPart2, 'Test failed');
    assert.deepEqual(objPart1, objPart1Copy, 'Test failed');
    assert.deepEqual(objPart2, objPart2Copy, 'Test failed');
  }
}

{
  // TEST 4.7
  // todo: Написать функцию, которая будет возвращать новый объект с удаленными свойствами prop1 и prop2
  //  !!! Для решения воспользоваться возможностями ECMAScript2015+ !!!
  //  !!! Запрещено создавать неиспользуемые переменные !!!
  //  !!! Можно использовать оператор delete !!!
  function createObjectWithoutProps1and2(inputObj) {
    const { prop1, prop2, ...rest } = inputObj;
    return rest;
  }

  {
    const inputObj = {
      prop1: 111,
      prop2: 222,
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строка ниже - исключение, ее менять не нужно)
    const expectedInputObj = JSON.parse(JSON.stringify(inputObj));
    const expectedResult = {
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };

    const result = createObjectWithoutProps1and2(inputObj);

    assert.notEqual(result, inputObj, 'Test failed. Original object modified ');
    assert.deepEqual(
      result,
      expectedResult,
      'Test failed. test() returned wrong object'
    );
    assert.deepEqual(
      inputObj,
      expectedInputObj,
      'Test failed. Original object modified '
    );
  }
}

{
  // TEST 4.8
  // todo: Написать функцию, которая будет возвращать новый объект с удаленными свойствами prop1 и prop2
  //  !!! Написать решения БЕЗ использования деструктуризации !!!
  //  !!! Запрещено создавать неиспользуемые переменные !!!
  //  !!! Можно использовать оператор delete !!!

  function createObjectWithoutProps1and2(inputObj) {
    const newObj = Object.assign({}, inputObj);
    delete newObj.prop1;
    delete newObj.prop2;
    return newObj;
  }

  //   function createObjectWithoutProps1and2(inputObj) {
  //     const outputObj = {};
  //     for (let prop in inputObj) {
  //       if (prop !== 'prop1' && prop !== 'prop2') {
  //         outputObj[prop] = inputObj[prop];
  //       }
  //     }
  //     return outputObj;
  //   }

  {
    const inputObj = {
      prop1: 111,
      prop2: 222,
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строка ниже - исключение, ее менять не нужно)
    const expectedInputObj = JSON.parse(JSON.stringify(inputObj));
    const expectedResult = {
      prop3: 333,
      prop4: 444,
      prop5: 555,
    };

    const result = createObjectWithoutProps1and2(inputObj);

    assert.notEqual(result, inputObj, 'Test failed. Original object modified ');
    assert.deepEqual(
      result,
      expectedResult,
      'Test failed. test() returned wrong object'
    );
    assert.deepEqual(
      inputObj,
      expectedInputObj,
      'Test failed. Original object modified '
    );
  }
}

{
  // TEST 4.9
  // todo: Написать функцию, которая скопирует объект со всеми публичными свойствами, а также геттерами и сеттерами,
  //  которые скопируются не по значению, а как геттеры и сеттеры

  function copyObject1(inputObj) {
    const newObj = {};
    for (const prop in inputObj) {
      const descriptor = Object.getOwnPropertyDescriptor(inputObj, prop);
      if (descriptor) {
        if (descriptor.get || descriptor.set) {
          Object.defineProperty(newObj, prop, descriptor);
        } else {
          newObj[prop] = inputObj[prop];
        }
      }
    }
    return newObj;
  }

  {
    const inputObj = Object.defineProperty(
      {
        a: 1,
        get A() {
          return this.a + 1;
        },
        b: 2,
        get B() {
          return this.b + '';
        },
        set B(val) {
          this.b = Number(val) || 0;
        },
        c: 3,
      },
      'C',
      {}
    );
    // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
    // (Строка ниже - исключение, ее менять не нужно)
    const expectedResult = JSON.parse(JSON.stringify(inputObj));

    const result = copyObject1(inputObj);

    assert.notEqual(
      result,
      inputObj,
      'Test failed. Original and result objects is same object'
    );
    assert.deepEqual(
      inputObj,
      expectedResult,
      'Test failed. Original object modified'
    );
    assert.deepEqual(
      result,
      expectedResult,
      'Test failed. test() returned wrong object'
    );
    assert.deepEqual(
      Object.keys(result).length,
      Object.keys(expectedResult).length,
      'Test failed. test() returned wrong object'
    );

    const valA = result.A;

    try {
      result.A = valA + 123456789;
    } catch {
      // ignore errors
    }

    assert.deepEqual(result.A, valA, 'Test failed. result.A is not readonly');
  }
}
