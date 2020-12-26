import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm
        },
      });
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        search();
      }
    }, 1000);

    return (() => {
      clearTimeout(timeoutId);
    })

  }, [searchTerm]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='group'>
        <div>
          <h2>{result.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        </div>
        <a
          href={`https://en.wikipedia.org/wiki?curid=${result.pageid}`}
          className='button'
          target='_blank'
          rel='noreferrer'
        >
          Go to page
        </a>
      </div>
    )
  })

  const searchTermHandler = (term) => {
    setSearchTerm(term);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <label htmlFor='search-term'>Search:</label>
        <input
          id='search-term'
          name='search-term'
          type='text'
          value={searchTerm}
          onChange={e => searchTermHandler(e.target.value)}
        />
      </form>
      {renderedResults}
    </div>
  );
}

export default Search;