// src/components/InputItem.jsx
import React from 'react';

const InputItem = ({ id, value, onChange, onDelete }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder="入力してください"
      />
      <button onClick={() => onDelete(id)}>削除</button>
    </div>
  );
};

export default InputItem;
