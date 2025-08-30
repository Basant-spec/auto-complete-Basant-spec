import React, { useState } from "react";
import "../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [inputValue, setInputValue] = useState("");   // for search box
  const [suggestions, setSuggestions] = useState([]); // for filtered list

  // function to handle typing
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // filter fruits asynchronously (using setTimeout to mimic async)
    setTimeout(() => {
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }, 200); // small delay so UI feels async
  };

  return (
    <div>
      <h2>Search item</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={handleChange}
      />

      {/* Show suggestions */}
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
