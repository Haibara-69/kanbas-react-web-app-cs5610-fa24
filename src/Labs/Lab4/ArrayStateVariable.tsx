import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
    <div id="wd-array-state-variables" 
    style={{ maxWidth: '350px', 
    margin: '20px 0 0 0', 
    padding: '10px', 
    }}>
      <h2>Array State Variable</h2>
      <button onClick={addElement}
      style={{
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border : 'none',
        padding: '10px 15px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        marginBottom: '5px', 
        display: 'block', 
        width: '40%'
      }}
      
      >Add Element</button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {array.map((item, index) => (
          <li key={index}
          style={{ display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px', 
            borderBottom: '1px solid #eee' }}
          >
            {item}
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    style={{
                        backgroundColor: '#f44336', 
                        color: 'white', 
                        border: 'none', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        cursor: 'pointer'
                      }}>
              Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
    <hr/>
    </div>
    
  );
}
