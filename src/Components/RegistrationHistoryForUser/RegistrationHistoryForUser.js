import React, { useContext, useEffect, useState } from 'react';
import RegisteredEvents from '../RegisteredEvents/RegisteredEvents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationHistoryForUser.css';
import { UserContext } from '../../App';

const RegistrationHistoryForUser = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    const [registeredVolunteer, setRegisteredVolunteer] = useState([]);
    useEffect( () => {
        fetch("https://quiet-eyrie-99836.herokuapp.com/volunteer?email="+userInfo.email)
        .then(res => res.json())
        .then(data => setRegisteredVolunteer(data));
    }, []);
    return (
        <div>
            <h1 className="text-center mb-5">Your registered events  </h1>
            <div className="container card-wrapper">
                {
                    registeredVolunteer.map(data => <RegisteredEvents key={data._id} eventsInfo={data}></RegisteredEvents>)
                }
            </div>
            
        </div>
    );
};

export default RegistrationHistoryForUser;