  import React, { useState } from 'react';
  import { Icon } from '@iconify/react';
  import './changeTodo.css';
  import oppsVid from '../assets/oops.mp4'


  const EmptyImage = () => (
    <video
      src={oppsVid}
      alt="Empty"
      style={{ width: '90%', height: '100%', background: 'transparent' }}
      autoPlay 
    />
  );

  const ChangetoDo = () => {
    const [leftItems, setLeftItems] = useState([
      { id: 1, name: 'John 😶‍🌫️', checked: false },
      { id: 2, name: 'Jane 🫥', checked: false },
      { id: 3, name: 'PAru 🫃', checked: false },
      { id: 4, name: 'Yashu 🐗', checked: false },
      { id: 5, name: 'MIHIRU 👽', checked: false },
    ]);

    const [rightItems, setRightItems] = useState([
      { id: 6, name: 'PRASASD 🐗', checked: false },
      { id: 7, name: 'PRANAAV 👽', checked: false },
    ]);

    const handleToRight = () => {
      const selectedItems = leftItems.filter((item) => item.checked);
      setLeftItems(leftItems.filter((item) => !item.checked));
      setRightItems([...rightItems, ...selectedItems.map(item => ({ ...item, checked: false }))]);
    };

    const handleToLeft = () => {
      const selectedItems = rightItems.filter((item) => item.checked);
      setRightItems(rightItems.filter((item) => !item.checked));
      setLeftItems([...leftItems, ...selectedItems.map(item => ({ ...item, checked: false }))]);
    };

    const handleCheckboxChange = (id, side) => {
      const updatedItems = side === 'left' ? [...leftItems] : [...rightItems];
      const itemIndex = updatedItems.findIndex((item) => item.id === id);
      updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;

      side === 'left' ? setLeftItems(updatedItems) : setRightItems(updatedItems);
    };

    return (
      <>
        <div className={`flex justify-between p-4 mt-6 max-[768px]:gap-5 wholeDiv ${leftItems.length === 0 ? 'emptyList' : ''}`}>
          <div className='firstList'>
            {leftItems.length === 0 ? <EmptyImage /> :
              leftItems.map((item) => (
                <div key={item.id} className='flex gap-3 namesWAla'>
                  <input
                    id={item.id}
                    className='checkbox'
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id, 'left')}
                  />
                  <label htmlFor={item.id} className='text-4xl text-white cursor-pointer'>{item.name}</label>
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-5 items-center lg:mt-14'>
            <button className="bg-blue-500 text-white px-2 py-1" onClick={handleToRight}>
              <Icon icon="raphael:arrowleft" rotate={2} />
            </button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={handleToLeft}>
              <Icon icon="raphael:arrowleft" />
            </button>
          </div>

          <div className={`SecondtList ${rightItems.length === 0 ? 'emptyList' : ''}`}>
            {rightItems.length === 0 ? <EmptyImage /> :
              rightItems.map((item) => (
                <div key={item.id} className='namesWAla cursor-pointer'>
                  <input
                    id={item.id}
                    type="checkbox"
                    className='checkbox'
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id, 'right')}
                    
                  />
                  <label htmlFor={item.id} className='text-4xl ml-3 text-white cursor-pointer'>{item.name}</label>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };

  export default ChangetoDo;
