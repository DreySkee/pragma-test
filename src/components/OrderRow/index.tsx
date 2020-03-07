import React, { useState, useEffect } from 'react';

function OrderRow(props: any) {

  const { tradeEvent, type } = props;
  const [age, setAge] = useState(0);
  const [newEvent, setNewEvent] = useState(true);

  useEffect(() => {
    setAge(0);
  }, [tradeEvent.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(age => age + 1);
    }, 1000);

    if (age === 1) setNewEvent(false);

    return () => clearInterval(interval);
  }, [age]);

  return (
    <div className={`order-row color-group-${tradeEvent.group} ${newEvent ? 'new-event' : ''}`}> 
      {type === 'bid' ?
        <>
          <div className="cell">{age}s</div>
          <div className="cell">{tradeEvent.xchg1}</div>   
          <div className="cell">{tradeEvent.shares1}</div>   
          <div className="cell">{tradeEvent.price1}</div>        
        </>
        :
        <>      
          <div className="cell">{tradeEvent.price1}</div> 
          <div className="cell">{tradeEvent.shares1}</div>              
          <div className="cell">{tradeEvent.xchg1}</div>   
          <div className="cell">{age}s</div>
        </>
      }
    </div>
  );
}

export default OrderRow;
