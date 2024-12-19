import React from 'react';

export default function TodoForm(props) {

    const [inputValue,setInputValue]=React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(inputValue);
        setInputValue("");
    }


  return (

  <form onSubmit={handleSubmit} className="todo-form">
    <input className="todo-input"
           type="text"
           value={inputValue}
           onChange={(event) => setInputValue(event.target.value)}
           placeholder="Add a new task" />
    <button className="add-button" type="submit">Add</button>
  </form>

  );
}