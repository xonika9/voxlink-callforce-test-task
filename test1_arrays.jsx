// v1.3
'use strict';

const assert = require("assert").strict;

{
  // TEST 1.1
  // todo: Допишите функцию decompressArr(), которая будет раскладывать все подмассивы inputArr (массив массивов чисел И/ИЛИ чисел/строк)

  //   function decompressArr(inputArr) {
  //     const result = [];

  //     function decompose(arr) {
  //       for (let i = 0; i < arr.length; i++) {
  //         const el = arr[i];
  //         if (Array.isArray(el)) {
  //           decompose(el);
  //         } else {
  //           result.push(el);
  //         }
  //       }
  //     }

  //     decompose(inputArr);
  //     return result;
  //   }

  function decompressArr(inputArr) {
    const result = [];

    function decompose(arr) {
      for (const el of arr) {
        if (Array.isArray(el)) {
          decompose(el);
        } else {
          result.push(el);
        }
      }
    }

    decompose(inputArr);
    return result;
  }

  {
    const result = decompressArr([[1, [2], 3], [4, 5], [6, [7], 8], 9]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([[1, 2], 3, [4], [5, 6, 7, 8], 9]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([1, [2, 3, 4], [5], 6, [7, 8, 9]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([
      [1, [2, 3], 4],
      [5],
      [6, [7, 8, `9,10`], 11],
    ]);
    assert.deepEqual(
      result,
      [1, 2, 3, 4, 5, 6, 7, 8, `9,10`, 11],
      'Test failed'
    );
  }
}

{
  // TEST 1.1.X - Дополнительный вопрос
  // todo: Задача из "TEST 1.1" решается без использования рекурсии.
  //  Попробуйте написать функцию, которая будет решать задачу из "TEST 1.1" используя один цикл for и
  //   без использования рекурсии.

  function decompressArr(inputArr) {
    const result = [];
    let id = 0;

    while (id < inputArr.length) {
      const element = inputArr[id];

      if (Array.isArray(element)) {
        inputArr.splice(id, 1, ...element);
      } else {
        result.push(element);
        id++;
      }
    }

    return result;
  }

  {
    const result = decompressArr([[1, [2], 3], [4, 5], [6, [7], 8], 9]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([[1, 2], 3, [4], [5, 6, 7, 8], 9]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([1, [2, 3, 4], [5], 6, [7, 8, 9]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test failed');
  }
  {
    const result = decompressArr([
      [1, [2, 3], 4],
      [5],
      [6, [7, 8, `9,10`], 11],
    ]);
    assert.deepEqual(
      result,
      [1, 2, 3, 4, 5, 6, 7, 8, `9,10`, 11],
      'Test failed'
    );
  }
}
{
  // TEST 1.2
  // todo: Нужно создать ДВЕ переменных в функции sumSecondAndFourth, которые будут содержать в себе
  //  значения второго и четвертого элементов массива, и вернуть сумму этих переменных
  //  !!! Для решения воспользоваться деструктуризацией !!!
  //  !!! Нельзя обращаться к массиву по индексам !!!
  //  !!! Нельзя создавать переменные, которые не будут использоваться !!!

  function sumSecondAndFourth(arr) {
    const [, second, , fourth] = arr;
    return second + fourth;
  }

  // Можно использовать деструктуризацию в параметрах функции и сразу вернуть сумму значений
  //   function sumSecondAndFourth([, second, , fourth]) {
  //     return second + fourth;
  //   }

  {
    const result = sumSecondAndFourth([0, 1, 0, 2, 0, 0, 0, 0, 0]);
    assert.equal(result, 3, 'Test failed');
  }
  {
    const result = sumSecondAndFourth([1, 1, 5, 2, 5, 2, 5, 1, 6]);
    assert.equal(result, 3, 'Test failed');
  }
  {
    const result = sumSecondAndFourth([4, 7, 0, 1, 3, 0, 8, 0, 0]);
    assert.equal(result, 8, 'Test failed');
  }
}

{// TEST 1.3
    // todo: Нужно создать ОДНУ переменную, которая будет содержать в себе все значения массива arr
    //  начиная с индекса = 3 и далее ВНЕ зависимости от длины массива
    //  !!! Для решения воспользоваться методом массива !!!
    function getAllAfterThree(arr) {
        // Писать код здесь
    }

    {
        const result = getAllAfterThree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expectedResult = [4, 5, 6, 7, 8, 9];

        assert.deepEqual(result, expectedResult, "Test failed");
    }
    {
        const result = getAllAfterThree([1, 2, 3, 4, 5, 6, 7]);
        const expectedResult = [4, 5, 6, 7];

        assert.deepEqual(result, expectedResult, "Test failed");
    }
}

{// TEST 1.4
    // todo: Нужно создать ОДНУ переменную в функции getAllAfterThree, которая будет содержать в себе
    //  все значения массива arr начиная с индекса = 3 и далее ВНЕ зависимости от длины массива
    //  !!! Для решения воспользоваться деструктуризацией и rest-оператором !!!
    function getAllAfterThree(arr) {
        // Писать код здесь
    }

    {
        const result = getAllAfterThree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expectedResult = [4, 5, 6, 7, 8, 9];

        assert.deepEqual(result, expectedResult, "Test failed");
    }
    {
        const result = getAllAfterThree([1, 2, 3, 4, 5, 6, 7]);
        const expectedResult = [4, 5, 6, 7];

        assert.deepEqual(result, expectedResult, "Test failed");
    }
}
