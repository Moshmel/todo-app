import React,{useState} from 'react';
export default ({ addTodo })=>{
    const [text,setText]=useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return;
        addTodo(text);
        setText("");
      };
    
      return (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="input"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn-add" type="submit">Add</button>
        </form>
      );

}


