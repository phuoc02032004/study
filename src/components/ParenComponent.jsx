import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import ChildSecond from './ChildSecond';
import SiblingInput from './SiblingInput';
import UserComponent from './UserComponent';
import CounterComponent from './CounterComponent';

const nguoi = {
    name: 'Nguyen Van A',
    age: 20
    }

function ParenComponent() {
    const [count, setCount] = useState(0);
    const [sharedValue, setSharedValue] = useState('');

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleInputChange = (newValue) => {
        setSharedValue(newValue);
      };

  return (
    <>
        Day la Component cha
        {/* <ChildComponent name={nguoi.name} age={nguoi.age} /> */}

        {/* <div>Count: {count}</div>
        <ChildSecond handleOnClick={handleClick} /> */}


        {/* <SiblingInput
            label="Input A:"
            value={sharedValue}
            onChange={handleInputChange} // Sibling A goi ham 
          /> */}
          {/* <SiblingInput
            label="Input B:"
            value={sharedValue}
            onChange={handleInputChange} // Sibling B goi ham 
          /> */}

          {/* <UserComponent /> */} {/* Vi du Context */}

        <CounterComponent /> {/* Vi du Redux */}
    </>
  )
}

export default ParenComponent
