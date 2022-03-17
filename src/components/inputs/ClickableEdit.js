import React, { useState } from "react";

import StyledButton from "./StyledButton";
import styles from './ClickableEdit.module.css';

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
    <div className={styles.container}>
      {
        isEditing ? (
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <input
              type='text'
              defaultValue={value}
              onChange={handleInputChange}
              onKeyDown={handleInputKeydown}
            />

            <StyledButton
              onClick={handleCancel}
              variant={'outline-secondary'}
              style={{ borderTop: 'none', borderBottom: 'none', borderRight: 'none'}}
            >
              Cancel
            </StyledButton>

            <StyledButton
              onClick={handleSubmit}
              variant={'primary'}
            >
              Save
            </StyledButton>
          </div>
        </div>
        ): (
          <h1 
            className={styles.textView}          
            onClick={() => setIsEditing(true)}
          >
            { `✎ ${value} ` }        
          </h1>
        )
      }
    </div>
    
  );
}

export default ClickableEdit;
