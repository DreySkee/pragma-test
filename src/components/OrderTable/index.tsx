import React from 'react';
import OrderSide from '../OrderSide';

function OrderTable(props: any) {
  const { nextBid, nextAsk, size, reset } = props;

  return (
    <div className="order-table panel">
      <h2>Order Book</h2>
      <OrderSide tradeEvent={nextBid} size={size} type="bid" reset={reset} />
      <OrderSide tradeEvent={nextAsk} size={size} type="ask" reset={reset} /> 
    </div>
  );
}

export default OrderTable;
