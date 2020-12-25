import React, { useState, useEffect } from 'react';
import axios from 'axios';
//https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCH_TERM

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm
        },
      });
    }
    search();

  }, [searchTerm]);

  const searchTermHandler = (term) => {
    setSearchTerm(term);
  }
  console.log(searchTerm);
  return (
    <form>
      <label htmlFor='search-term'>Search:</label>
      <input
        id='search-term'
        name='search-term'
        type='text'
        value={searchTerm}
        onChange={e => searchTermHandler(e.target.value)}
      />
    </form>
  );
}

export default Search;