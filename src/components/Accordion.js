import React, { useState } from 'react';

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const titleClickHandle = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  }

  const renderedItems = props.items.map((item, i) => {
    return (
      <div key={i}>
        <h3
          className='title'
          onClick={() => titleClickHandle(i)}
        >
          <i className={`fas fa-chevron-circle-${i === activeIndex ? 'down' : 'right'}`}></i>
          {item.title}
        </h3>
        <p className={i === activeIndex ? '' : 'hidden'}>{item.content}</p>
      </div>
    )
  })

  return (
    <div>
      {renderedItems}
    </div>
  )
}

export default Accordion;