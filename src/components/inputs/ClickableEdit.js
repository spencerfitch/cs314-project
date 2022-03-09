import { useState } from "react";

import StyledButton from "./StyledButton";

const ClickableEdit = ({ value, setValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleInputChange = (ev) => (
    setTempValue(ev.target.value)
  );

  const handleInputKeydown = (ev) => {
    if (ev.key === 'Enter') handleSubmit();
  }

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  }

  const handleSubmit = () => {
    setValue(tempValue);
    setIsEditing(false);
  }

  return (
    isEditing ? (
      <div
      style={{
        backgroundColor: 'white',
        padding: '.2em .5em',
        borderRadius: '15px',
      }}
    >
      <input
        type='text'
        defaultValue={value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeydown}
        style={{
          padding: '.3em',
          borderRadius: '6px',
          border: '1px solid rgba(0, 0, 0, .2)',
          fontSize: '1em',
        }}
      />

      <StyledButton
        onClick={handleCancel}
        style={{
          marginLeft: '1em',
          marginRight: '.25em',
          backgroundColor: 'rgba(0, 0, 0, .1)',
        }}
      >
        Cancel
      </StyledButton>

      <StyledButton
        onClick={handleSubmit}
        style={{
          backgroundColor: 'rgba(0, 150, 255, .8)',
          color: 'white',
        }}
      >
        Save
      </StyledButton>
    </div>
    ): (
      <h1 
        className="heading"
        style={{ 
          textAlign: 'center',
          color: 'white',
          width: 'fit-content',
          padding: '.2em',
        }}          
        onClick={() => setIsEditing(true)}
      >
        { `✎ ${value} ` }        
      </h1>
    )
  );
}

export default ClickableEdit;
