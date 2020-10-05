import React from 'react';
import Events from './Events/Events';
import data from '../../DataCollection/dataCollection';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    return (
        <div className="wrapper m-4">
            {
                data.map( item => <Events key={item.id} event={item}></Events> )
            }
        </div>
    );
};

export default Home;