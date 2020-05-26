import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHistory } from '../model/state/selectors'; 

const NotFound = () => {

    const history = useSelector(selectHistory);

    let [timer, setTimer] = useState(6);

    setTimeout(() => {timer > 0 ? timerActive() : timerExpired()}, 1000)

    function timerActive() {
        setTimer(--timer);
    }
    function timerExpired() {
        history.push('/');
        history.go();
    }
    

    return (
        <div>
            Looks like you navigated to the wrong page, don't worry. We'll Redirect you in {timer}
        </div>
    )
}

export default NotFound;
