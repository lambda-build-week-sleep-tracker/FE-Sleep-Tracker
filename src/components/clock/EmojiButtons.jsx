import React, { useState, useEffect } from 'react';
import './EmojiButtons.scss';

export default function EmojiButtons(props) {
    const value = {};
    const [mood,setMood] = useState(null);
    // useEffect(() => {},[mood]) 
    function handleSubmit(num) {
        setMood(num);
        props.setMood(mood)
    }
    

    return (
      <div className="emoji">
        <button 
        onClick={() => handleSubmit(4)}
          label="Smile Face"
        >😊</button>
        <button
        onClick={() => handleSubmit(3)}
          label="Neutral Face"
        >😐</button>
        <button 
        onClick={() => handleSubmit(2)}
        label="Frown Face"
        >🙁</button>
        <button
          onClick={() => handleSubmit(1)}
          label="Angery Face"
          value="1"
        >😡</button>
      </div>
    )
}