import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams, Link } from "react-router-dom";
import CommentDetails from '../CommentDetails/CommentDetails';


const PostDetails = () => {

  const { postId } = useParams();
  const [photoUrls, setphotoUrls] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [comments, setComments] = useState([]);

  const postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`
  const commentURL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`

  //for fetching photos
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then(res => res.json())
      .then(data => setphotoUrls(data.results))
  }, [])

  //for fetching  post and comments
  useEffect(() => {
    fetch(postURL)
      .then(res => res.json())
      .then(data => setSinglePost(data))
  }, [])

  useEffect(() => {
    fetch(commentURL)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])


  const { id, userId, title, body } = singlePost;

  const currDate = new Date().toLocaleDateString();
  

  //when comments and photos url both are fetched succesfully  then merged together so that each object can have a photo url.
  
  (comments.length && photoUrls.length) && comments.map((cmnt, idx) => {
    return cmnt.img = photoUrls[idx].picture.medium
  })

  return (

    <div className='postDetails'>
      <div className='postDetails__Ids'>
        <span className='postDetails__userId'>
          User Id:{userId}
        </span>
        <span className='postDetails__postId'>
          Post Id:{id}
        </span>
      </div>
      <div className='postDetails__title'>
        {title}
      </div>

      <div className='postDetails__body'>
        <div>{body}</div>
        <div className='postDetails__Date'>posted On--{currDate}</div>
      </div>
      <div className='postDetails__comment' >
        <h3 style={{fontStyle:'darkblue',marginBottom:'10px'}}>Comments:</h3>
      </div>
      {
        (comments.length)
        &&
        comments.map(cmnt => <CommentDetails Comments={cmnt} />)
      }
    </div>
  );
};

export default PostDetails;