import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { Link } from 'react-router-dom';

const ArrowSvgIcon = withStyles({
  root: {
    fontSize: '3rem',
  },
})(SvgIcon);

interface Props {
  children: string;
}

export default function Bar({ children }: Props) {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/">
            <ArrowSvgIcon>
              <path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z" />
            </ArrowSvgIcon>
          </Link>
          <Typography variant="h6" color="inherit">
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
