import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import NavigationBar from './components/NavigationBar';
import Route from './components/Route';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Widgets App</h1>
      </header>
      <NavigationBar />
      <div className='component-on-home'>
        <Route path='/'>
          <Accordion items={items} />
        </Route>
        <Route path='/list'>
          <Search />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
      </div>
    </div>
  );
}

export default App;

