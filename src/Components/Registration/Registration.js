import React, { useState } from 'react';
import 'date-fns';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));

const Registration = () => {

    const classes = useStyles();

    const [userInfo, setUserInfo] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({
        registrationDate : new Date()
    });

    const handleDateChange = (date) => {
        const newDate = {...selectedDate};
        newDate.registrationDate = date;
        setSelectedDate(newDate);
        console.log(newDate);
    };

    const handleRegistration = () => {
        const volunteerInfo = { ...userInfo, ...selectedDate };
        fetch('https://quiet-eyrie-99836.herokuapp.com/addRegistration', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(volunteerInfo)
        })
            .then(res => res.json())
            .then(data => { console.log(data); })
            .catch(err => console.log(err));
    }

    return (

        <form className={classes.root} noValidate autoComplete="off">
            <div className="container registration-card my-5 p-3" >
                <h3 className='text-center text-success'>Register as a Volunteer</h3>
                <TextField
                    className="ml-5"
                    required
                    id="standard-required"
                    label="Full Name"
                    defaultValue={userInfo.userName}
                />
                <TextField
                    className="ml-5"
                    required
                    id="standard-required"
                    label="Username or Email"
                    defaultValue={userInfo.email}
                />
                <TextField
                    className="ml-5"
                    required
                    id="standard-required"
                    label="Event Interested In ?"
                    defaultValue={userInfo.eventName}
                />
                <TextField
                    className="ml-5"
                    id="standard-required"
                    label="Why are you interested for this event?"
                    defaultValue=""
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid className="ml-5">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate.registrationDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Link style={{textDecoration : "none"}} to="/userHistory"><Button onClick={handleRegistration} className="mx-5 my-3 register-btn" variant="primary" size="lg" block>Registration</Button></Link>

            </div>
        </form>
    );
};

export default Registration;