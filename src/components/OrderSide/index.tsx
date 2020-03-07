import React, { useState, useEffect } from 'react';
import OrderRow from '../OrderRow';

function OrderSide(props: any) {

  const { tradeEvent, size, type, reset } = props;
  const [events, setEvents] = useState<Array<any>>([]);

  useEffect(() => {
    if (tradeEvent.price1) {
      events.push({
        tradeEvent,
        comp: <OrderRow key={tradeEvent.id} tradeEvent={tradeEvent} type={type} /> 
      })

      if (type === 'bid') {
        events.sort((a, b) => b.tradeEvent.price1 - a.tradeEvent.price1);
      } else {
        events.sort((a, b) => a.tradeEvent.price1 - b.tradeEvent.price1);
      }

      const eventsSlice = events.slice(0, size);
      const groupedEvents = groupPrices(eventsSlice);
      setEvents(groupedEvents)      
    }
  // eslint-disable-next-line
  }, [tradeEvent.id]); 

  useEffect(() => {
    if (reset) setEvents([]);
  }, [reset]);

  const groupPrices = (events: Array<any>) => {
    interface Indexable {
      [key: string]: number;
    }

    let group = 1;
    const pricesMap: Indexable = {};

    events.forEach(event => {
      if (!pricesMap[event.tradeEvent.price1]) {
        pricesMap[event.tradeEvent.price1] = group;
        group++;
      }
      
      event.tradeEvent.group = pricesMap[event.tradeEvent.price1] 
    });

    return events;
  }

  return (
    <div className="side">
      <h4>{type === 'bid' ? 'Bid' : 'Ask'}</h4> 
      <div className="rows" >
        <div className="table-header">
        {type === 'bid' ?
          <>
            <div className="cell">Age</div>
            <div className="cell">Exch</div>
            <div className="cell">Shares</div>
            <div className="cell">Price</div>
          </>
          :
          <>
            <div className="cell">Price</div>
            <div className="cell">Shares</div>
            <div className="cell">Exch</div>
            <div className="cell">Age</div>
          </>
        }

        </div>
        {events.map(event => event.comp )}   
      </div>
    </div>
  );
}

export default OrderSide;
