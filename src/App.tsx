import React from 'react';
import {  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Card from './Card'

const numbers = Array.from(Array(21).keys()).slice(1);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    // backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },

}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        {numbers.map(value => (
            <Card value={value} key={value} />
        ))}
    </Box>
  );
}

export default App;
