import './App.css';
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <div className='App'>
      <div className='inpt'>
        <input type="text" onChange={handleInputChange} />
      </div>
      <div className='mirror'>
        {inputValue}
      </div>
      
    </div>
  );
}
  
export default App;
