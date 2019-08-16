import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

export default function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined, threshold: 1 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
