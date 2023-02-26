import React from 'react';
import colorNames from 'colornames';

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Add Color Name:</label>
            <input type="text" 
            autoFocus 
            placeholder='Add color name'
            required
            value={colorValue} 
            onChange={(e)=>{
                setColorValue(e.target.value); 
                setHexValue(colorNames(e.target.value));
            }}

            />
            
        </form>

        <button type="submit" onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
    </div>
  )
}



export default Input