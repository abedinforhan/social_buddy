import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams} from "react-router-dom";
import Comment from '../Comment/Comment.'


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
  }, []);

  //for fetching  post and comments
  useEffect(() => {
    fetch(postURL)
      .then(res => res.json())
      .then(data => setSinglePost(data))
  }, []);

  //for fetching Comments
  useEffect(() => {
    fetch(commentURL)
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  //when comments and photos url both are fetched succesfully  then merged together so that each object can have a photo url.
  (comments.length && photoUrls.length) 
   && 
  comments.map((cmnt, idx) => {
    return cmnt.img = photoUrls[idx].picture.medium
  });

  return (
     <div className='postDetails'>
        <Comment Comments={comments} /> 
       
    </div>
  );
};
export default PostDetails;