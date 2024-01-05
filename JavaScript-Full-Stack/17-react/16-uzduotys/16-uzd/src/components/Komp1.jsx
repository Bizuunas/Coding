import React from 'react'
import { MouseEvent } from 'react';

const Komp1 = () => {
  const items = [
    "Paris",
    "San Francisco",
    "Tokyo",
    "London",
    "Vilnius"
  ];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">

        {items.map((item, index) => (
          <li
            key={item.id}
            onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Komp1