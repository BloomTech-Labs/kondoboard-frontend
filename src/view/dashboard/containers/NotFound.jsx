import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectHistory } from '@state/selectors.js'; 

const NotFound = () => {
  const history = useSelector(selectHistory);

  const [timer, setTimer] = useState(6);

  setTimeout(() => {timer > 0 ? timerActive() : timerExpired()}, 1000)

  const timerActive = () => {
    setTimer(timer-1);
  };

  const timerExpired = () => {
    history.push('/');
    history.go();
  };
  
  return (
    <div>
      Looks like you navigated to the wrong page. Don't worry, we'll redirect you in {timer} seconds.
    </div>
  );
};

export default NotFound;
