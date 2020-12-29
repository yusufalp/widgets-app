import React from 'react';
import Link from './Link';

const NavigationBar = () => {
  return (
    <div>
      <Link href='/'>Accordion</Link>
      <Link href='/list'>Search</Link>
      <Link href='/translate'>Translate</Link>
    </div>
  );
}

export default NavigationBar;