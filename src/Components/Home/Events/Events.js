import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

    
const useStyles = makeStyles({
    root: {
      width: "90%",
    },
    media: {
      height: 200,
    },
  });

const Events = (props) => {
    const { eventName, img } = props.event;

    const classes = useStyles();

    const [userInfo, setUserInfo] = useContext(UserContext);
    const selectedEventHandle = (newEventName, img) => {
      const currentUser = {...userInfo};
      currentUser.eventName = newEventName;
      currentUser.eventImg = img;
      setUserInfo(currentUser);
    }

    return (
            <Link style={{textDecoration : "none"}} to='/register'>
              <Card className={classes.root} className='m-3' >
                <CardActionArea onClick={() => selectedEventHandle(eventName, img)}>
                    <CardMedia
                        className={classes.media}
                        image={require(`../../../DataCollection/images/${img}`)}
                        title="Contemplative Reptile"
                    />
                    <CardContent className='bg-warning' >
                        <Typography gutterBottom variant="h5" component="h2">{eventName}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Link>
    );
};

export default Events;