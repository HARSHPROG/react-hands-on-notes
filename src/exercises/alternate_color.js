import React, { useState } from 'react';
import './alternate_color.css';

const AlternateColor = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEven, setEven] = useState(0);
  const [isOdd, setOdd] = useState(0);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if(index%2 === 0) {
      setEven(1);
    } else {
      setOdd(1);
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`font_purple ${(index%2 === 0 && isEven === 1) ? "back_red" : ((index%2 !== 0 && isOdd === 1) ? "back_blue" : "back_yellow")}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AlternateColor;