import { useState } from "react"


export const useCalculator = () => {
  
  const [number, setNumber] = useState('0')

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

  return {
    //Properties
    number,
    //Methods
    buildNumber
  }
}
