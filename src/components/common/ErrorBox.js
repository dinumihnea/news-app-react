import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function ErrorBox(props) {
  return (
    <Box
      m={3}
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent="center"
      alignItems="center">
      <Typography variant={'h5'} color={'primary'}>{props.children}</Typography>
    </Box>
  );
}

