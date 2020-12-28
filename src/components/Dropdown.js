import React from 'react';

const Dropdown = (props) => {
  const renderedOptions = props.options.map((option, i) => {
    return (
      <option key={i} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div>
      <form>
        <label htmlFor='items' className='label'> Select a {props.label}: </label>
        <select
          name='items'
          id='items'
          onChange={(e) => props.handleSelectedChange(e.target.value)}
        >
          {renderedOptions}
        </select>
      </form>
    </div>
  );
}

export default Dropdown;