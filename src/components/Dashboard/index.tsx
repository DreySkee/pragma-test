import React, { useState, useEffect } from 'react';
import OrderEvent from '../OrderEvent';
import OrderTable from '../OrderTable';

const api = 'https://pragma-test-server.herokuapp.com/';
let source: any;

function Dashboard() {
  const emptyEvent = {
    id: 0,
    timestamp: 0,
    type: '-',
    price1: 0,
    shares1: 0,
    xchg1: '-',
    price2: 0,
    shares2: 0,
    xchg2: '-',   
  };

  const [event, setEvent] = useState(emptyEvent);
  const [bid, setBid] = useState({});
  const [ask, setAsk] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetTable, setResetTable] = useState(false);

  useEffect(() => {
    // Reset SSE on initial load
    sendRequest('reset');
  }, []);

  const start = () => {
    source = new EventSource(api + 'start');
    source.onmessage = (e: any) => {
      if (e.data && !e.data.includes('stop streaming at event')) {
        let { event } = JSON.parse(e.data);
        event = convertToObj(event);
        
        if (event.type === 'Ask') setAsk(event);
        if (event.type === 'Bid') setBid(event);
        setEvent(event)
      } else {
        stop();  
      }
    };    

    setIsPlaying(true);
    setResetTable(false);
  }

  const reset = () => {
    sendRequest('reset');
    setEvent(emptyEvent)
    setIsPlaying(false);
    setResetTable(true);
  }

  const stop = () => {
    sendRequest('stop'); 
    setIsPlaying(false);  
  }

  const setSpeed = (speed: number) => {
    sendRequest('set?speed=' + speed);   
    setIsPlaying(false);
  }

  const convertToObj = (eventArr: Array<any>) => {
    const eventObj = {...emptyEvent};
    (Object.keys(eventObj) as Array<keyof typeof eventObj>).forEach((key, index) => {
      (eventObj[key] as any) = eventArr[index] || eventObj[key];
    });
    return eventObj;
  }

  const sendRequest = (query: string) => {
    if (source) source.close();
    fetch(api + query).catch(err => { 
      alert('Error: ' + err); 
    });     
  }

  return (
    <div className="dashboard">
      <div className="controls">
        {isPlaying ?
          <span className="stop-btn" onClick={stop}>Stop</span> 
          :
          <span className="start-btn" onClick={start}>Start</span> 
        }
        <span onClick={reset}>Reset</span>  
        &nbsp;&nbsp;Speed: &nbsp;
        <span onClick={() => setSpeed(.1)}>0.1x</span> 
        <span onClick={() => setSpeed(.25)}>0.25x</span>  
        <span onClick={() => setSpeed(.5)}>0.5x</span>  
        <span onClick={() => setSpeed(1)}>1x</span>  
        <span onClick={() => setSpeed(2)}>2x</span>  
        <span onClick={() => setSpeed(5)}>5x</span>  
        <span onClick={() => setSpeed(10)}>10x</span>
        <span onClick={() => setSpeed(20)}>20x</span>  
      </div> 
      <OrderEvent event={event} /> 
      <OrderTable nextBid={bid} nextAsk={ask} size={13} reset={resetTable} />
    </div>
  );
}

export default Dashboard;
