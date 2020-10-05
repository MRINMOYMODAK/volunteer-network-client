import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
      width: "90%",
    },
    media: {
      height: 150,
    },
  });

const RegisteredEvents = (props) => {

    const classes = useStyles();
    
    const {eventName, eventImg, _id, registrationDate} = props.eventsInfo;

    const [removeItem, setRemoveItem] = useState(false);

    const cancelEvent = (id, event) => {
        console.log(id);
        fetch(`https://quiet-eyrie-99836.herokuapp.com/delete/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then( result => {
            if(result){
               setRemoveItem(true);
            }
        })
    }
    
    return (
        <Card className={classes.root} >
            {
                !removeItem && <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={require(`../../DataCollection/images/${eventImg}`)}
                        title="Contemplative Reptile"
                    />
                    <CardContent className='bg-light' >
                        <Typography gutterBottom variant="h5" component="h2">{eventName}</Typography>
                        <p>{new Date(registrationDate).toDateString('dd/MM/yyyy')}</p>
                        <button onClick={() => cancelEvent(_id)}  className='btn btn-warning' > Cancel </button>
                    </CardContent>
                </CardActionArea>
            }
            
        </Card>
        
    );
};

export default RegisteredEvents;