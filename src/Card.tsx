import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';

const textColors = [Colors.blue[500], Colors.pink[500], Colors.cyan[500], Colors.purple[500], Colors.teal[500],
Colors.deepPurple[500], Colors.green[500], Colors.deepOrange[500], Colors.lightGreen[500], Colors.red[900]]

const useStyles = makeStyles(theme => ({
  paper: {
    margin: 1,
    backgroundColor: '#333',
    [theme.breakpoints.down('xs')]: {
      flexBasis: "18%",
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: "9%",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  empty: {
    content: '',
    float: 'left',
    paddingTop: '100%',
  },
}));

function Card(props: { value: number }) {
  const classes = useStyles();
  const audio = new Audio(`https://evolution.voxeo.com/library/audio/prompts/numbers/${props.value}.wav`);
  function handleClick() {
    audio.play();
  }
  return (
    <Paper className={classes.paper}>

      <Button onClick={handleClick}>
      <Box className={classes.empty}></Box>
      <Box color={textColors[props.value % 10]}>
        <Typography variant='h2'><strong>{props.value}</strong></Typography>
      </Box> 
    </Button>

      {/* <Box className={classes.empty}></Box>
      <Box color={textColors[props.value % 10]}>
        <Typography>{props.value}</Typography>
      </Box> */}


    </Paper>
  );
}

export default Card;
