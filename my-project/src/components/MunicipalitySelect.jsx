import { useState } from 'react';
import './MunicipalitySelect.css';

function MunicipalitySelect({ onSelect }) {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div>
      <label htmlFor="municipality">Select Municipality:</label>
      <select id="municipality" value={selected} onChange={handleChange}>
        <option value="">Choose...</option>
        <option value="Oslo">Oslo</option>
        <option value="Bergen">Bergen</option>
        <option value="Trondheim">Trondheim</option>
        {/* add more? */}
      </select>
    </div>
  );
}

export default MunicipalitySelect;
