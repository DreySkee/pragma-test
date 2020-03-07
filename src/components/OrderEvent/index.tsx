import React from 'react';
import moment from 'moment';

function OrderEvent(props: any) {
  const { event } = props;

  return (
    <div className="order-event panel"> 
      <h2>Order Event</h2>
       <div className="table-header">
        <div className="cell">Event No</div>
        <div className="cell">Replay Clock</div>
      </div>
      <div className="order-row"> 
        <div className="cell">{event.id}</div> 
        <div className="cell">{moment(event.timestamp).format('hh:mm:ss.SSS')}</div>                 
      </div>

      <div className="table-header">
        <div className="cell">Event</div>
        <div className="cell">Exch1</div>
        <div className="cell">Price1</div>
        <div className="cell">Shares1</div>
        <div className="cell">Exch2</div>
        <div className="cell">Price2</div>
        <div className="cell">Shares2</div>
      </div>
      <div className="order-row"> 
        <div className="cell">{event.type}</div> 
        <div className="cell">{event.xchg1}</div>   
        <div className="cell">{event.price1}</div>
        <div className="cell">{event.shares1}</div>
        <div className="cell">{event.xchg2}</div>   
        <div className="cell">{event.price2}</div>
        <div className="cell">{event.shares2}</div>               
      </div>
    </div>
  );
}

export default OrderEvent;
