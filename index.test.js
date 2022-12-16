const {reverseString, stringLength, calculator, capitalize } = require('./index');

// Test stringLength
describe('Calcule the length of string', () => {
  test('is equal to 6', () => {
    //Arrange
    const string = 'Hassan';
    const output = 6;

    //Act
    const result = stringLength(string);
    
    //Assert
    expect(result).toBe(output);
  });

  test('Expected an Error message', () => {
    //Arrange
    const string = 'Hassan Elouardy';
    const output = 'Erorr';

    //Act
    const result = stringLength(string);

     //Assert
    expect(result).toBe(output);
  });
});

//Test reverseString
describe('Reverse string', () => {
  test('Expected to be nassaH', () => {
    //Arrange
    const string = 'Hassan';
    const output = 'nassaH';

    //Act
    const result = reverseString(string);

    //Assert
    expect(result).toBe(output);
  });

});

//Test calculator Methodes

//Test Add Methode
describe('Calculate additon', () => {
  test('Expected 1 + 2 equal 3', () => {
    //Arrange
    const argA = 1;
    const argB = 2;
    const output = 3;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.add();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 10 + 22 equal 30', () => {
    //Arrange
    const argA = 10;
    const argB = 20;
    const output = 30;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.add();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 51 + 27 equal 78', () => {
    //Arrange
    const argA = 51;
    const argB = 27;
    const output = 78;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.add();

    //Assert
    expect(result).toBe(output);
  });

});


//Test Subtract Methode
describe('Subtract two numbers', () => {
  test('Expected 1 - 2 equal -1', () => {
    //Arrange
    const argA = 1;
    const argB = 2;
    const output = -1;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.subtract();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 10 - 20 equal -10', () => {
    //Arrange
    const argA = 10;
    const argB = 20;
    const output = -10;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.subtract();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 51 - 27 equal 24', () => {
    //Arrange
    const argA = 51;
    const argB = 27;
    const output = 24;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.subtract();

    //Assert
    expect(result).toBe(output);
  });

});

//Test Divide Methode
describe('Divide two numbers', () => {
  test('Expected 1 / 2 equal 0.5', () => {
    //Arrange
    const argA = 1;
    const argB = 2;
    const output = 0.5;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.divide();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 8 / 4  equal 2', () => {
    //Arrange
    const argA = 8;
    const argB = 4;
    const output = 2;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.divide();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 9 / 0 equal Impossible', () => {
    //Arrange
    const argA = 9;
    const argB = 0;
    const output = 'Impossible';

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.divide();

    //Assert
    expect(result).toBe(output);
  });

});

//Test multiply Methode
describe('Multiply two numbers', () => {
  test('Expected 4 * 5 equal 20', () => {
    //Arrange
    const argA = 4;
    const argB = 5;
    const output = 20;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.multiply();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 8 * 4  equal 32', () => {
    //Arrange
    const argA = 8;
    const argB = 4;
    const output = 32;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.multiply();

    //Assert
    expect(result).toBe(output);
  });

  test('Expected 9 * 0 equal 0', () => {
    //Arrange
    const argA = 9;
    const argB = 0;
    const output = 0;

    //Act
    const addition = new calculator(argA,argB);
    const result = addition.multiply();

    //Assert
    expect(result).toBe(output);
  });

});

// Test capitalize function
describe('Capitalize the first character :', () => {
  test('Expected to be Hassan :', () => {
    //Arrange
    const string = 'hassan';
    const output = 'Hassan';

    //Act
    const result = capitalize(string);
    
    //Assert
    expect(result).toBe(output);
  });
});