import React from 'react';

const Dropdown = (props) => {
  const renderedOptions = props.options.map((option, i) => {
    return (
      <option
        key={i}
        value={option.value}
      >
        {option.value}
      </option>
    );
  });

  return (
    <div>
      <form>
        <label
          htmlFor='colors'
          className='label'
        >
          Select a Color
        </label>
        <select
          name='colors'
          id='colors'
          onClick={(e) => props.handleSelectedChange(e.target.value)}
        >
          {renderedOptions}
        </select>
      </form>
    </div>
  );
}

export default Dropdown;