import React from 'react';
import './Comment.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import farhan from '../../Images/farhan.jpeg'
import takiya from '../../Images/takiya.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:600,
    marginLeft:'auto',
    marginRight:'auto'
    
  },
  media: {
    height: 0,
    paddingTop: '50.25%', // 16:9
    backgroundSize:'contain',
  },
  avatar: {
    backgroundColor: red[500],
  },
  
}));

export default function Com(props) {
  const comments=props.Comments;  //stored all the comments coming from Post Component //
  const classes = useStyles();
  const currDate = new Date().toLocaleDateString();
  
return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={takiya} aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Osthir Dev"
        subheader={currDate}
      />
      <CardMedia
        className={classes.media}
        image={farhan}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I am a Future BadAss Web Developer! A student of two hot online Teaching Tech Academy of Programming-Hero And Clever Programmer. I am currently under mentorship of Jhankar Mahabub And  Nazarey Dumnskey 
        </Typography>
      </CardContent>
      
      <CardContent>
          <Typography paragraph>Comments:</Typography>
          {
        (comments.length)
        &&
        comments.map(cmnt =>
          <Typography  paragraph className='comment__Container' >
            <div >
               <Avatar className='comment__img'  src={cmnt.img} />
             </div>
             <div className='comment__body'>  
               {cmnt.body} 
             </div>
          </Typography>
            
          )
          }
      </CardContent>
     
    </Card>
  );
}
