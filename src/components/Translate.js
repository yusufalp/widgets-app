import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const langOptions = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindu',
    value: 'hi'
  },
  {
    label: 'Turkish',
    value: 'tr'
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(langOptions[0]);
  const [text, setText] = useState('')

  const handleSelectedChange = (value) => {
    const selected = langOptions.filter(lang => lang.value === value);
    setLanguage(selected[0]);
  }

  return (
    <div>
      <label htmlFor='text'>Enter text</label>
      <input
        id='text'
        name='text'
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Dropdown
        label='language'
        selected={language}
        handleSelectedChange={handleSelectedChange}
        options={langOptions}
      />
      <hr />
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;