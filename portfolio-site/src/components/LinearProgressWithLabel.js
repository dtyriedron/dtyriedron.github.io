import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  var colors = ["primary", "secondary"];
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={35} style={{width:"10%"}}>
        <Typography variant="body2" color="textSecondary">{props.lan}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" color={colors[Math.floor(Math.random() * colors.length)]} {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${
          props.value.toFixed(2)
        }%`}</Typography>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel