import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


const NotFound = () => {

    const history = useHistory();

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
        <div className='not-found'>
            <p>Looks like you navigated to the wrong page, don't worry. We'll Redirect you in {timer}</p>
        </div>
    )
}

export default NotFound;
