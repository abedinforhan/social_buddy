import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CommentDetails = (props) => {
  const classes = useStyles();
  
  const {img,body}=props.Comments;
  
   return (
   
   <div className={classes.root}>
      <Avatar  src={img} /> <small>{body}</small>  
    </div>
     

  );
};

export default CommentDetails;