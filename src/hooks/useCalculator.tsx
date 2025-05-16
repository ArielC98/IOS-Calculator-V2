import { useRef, useState } from "react"

enum Operator {
  add,
  subsctract,
  multiply,
  divide
}

export const useCalculator = () => {
  
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  
  const lastOperation = useRef<Operator>(null);

  //Concatenates the numbers of the buttons
  const buildNumber = (numberString: string) => {

    if(number.includes('.') && numberString === '.') return;

    if(number.startsWith('0') || number.startsWith('-0')){
      
      //Decimal point
      if(numberString === '.'){
        return setNumber(number + numberString);
      }

      //Test if it is another cero and there is no decimal point
      if (numberString === "0" && number.includes('.')){
        return setNumber(number + numberString);
      }

      //Test if it is diferent from cero, there is no point and it's the first number
      if(numberString !== '0' && !number.includes('.')){
        return setNumber(numberString)
      }

      //Avoid 00000...
      if(numberString === '0' && !number.includes('.')){
        return;
      }

      return setNumber(number + numberString);



    }

    setNumber( number + numberString);

  }

  //Delete the last number
  const delNumber = () => {
    if((number.length === 2 && number.includes("-")) || (number.length === 1)){
      setNumber('0')
    }
    else{
      setNumber(number.slice(0,-1))
    }
  }

  //Clean Values
  const clearNumber = () => {
    setNumber('0'),
    setPrevNumber('0')
  }


  //Toggle the sign
  const toggleSign = () => {
    if(number.includes('-')){
      return setNumber(number.replace('-',''))
    }

    setNumber('-' + number);
  }

  const setLastNumber = () => {
    if(number.endsWith('.')){
      setPrevNumber(number.slice(0,-1));
    }
    else{
      setPrevNumber(number);
    }

    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide
  }
  
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply
  }
  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subsctract
  }
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add
  }

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch(lastOperation.current){

      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.subsctract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;

      default:
          throw new Error('Operation not implemented');
    }

    setPrevNumber('0')

  }

  return {
    //Properties
    number,
    //Methods
    buildNumber,
    toggleSign,
    delNumber,
    clearNumber,
    setNumber,
    prevNumber,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult
  }
}
