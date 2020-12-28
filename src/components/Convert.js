import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(props.text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(props.text);
    }, 1000);

    return () => {
      clearTimeout(timerId)
    };
  }, [props.text]);

  useEffect(() => {
    const translate = async () => {
      const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: props.language.value,
          key: process.env.REACT_APP_API_KEY
        }
      });
      setTranslated(res.data.data.translations[0].translatedText)
    }
    translate();
  }, [props.language, debouncedText]);

  return (
    <div>
      <o>{translated}</o>
    </div>
  );
}

export default Convert;