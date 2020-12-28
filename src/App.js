import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'A JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'It is popular in front-end engineering'
  },
  {
    title: 'How do you use React?',
    content: 'By creating components'
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
]

function App() {
  const [selected, setSelected] = useState(options[0].value)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Widgets App</h1>
      </header>
      <div className='component-on-home hidden'>
        <Accordion items={items} />
      </div>
      <div className='component-on-home hidden'>
        <Search />
      </div>
      <div className='component-on-home'>
        <Dropdown
          options={options}
          selected={selected}
          handleSelectedChange={setSelected}
        />
      </div>
    </div>
  );
}

export default App;

