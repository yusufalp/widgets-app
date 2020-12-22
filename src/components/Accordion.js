import React from 'react';

const Accordion = (props) => {
  const renderedItems = props.items.map((item, i) => {
    return (
      <div key={i}>
        <h3 className='title'>
          <i class="fas fa-chevron-circle-down"></i>
          {item.title}
        </h3>
        <p>{item.content}</p>
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