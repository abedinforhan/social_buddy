import React, { useState, useEffect } from 'react';
import Posts from '../Components/Posts/Posts';



const Home = () => {
  
  const [allPosts,setAllPosts]=useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> setAllPosts(data))
  },[])
 
  
  return (
     <div>
    {
        allPosts.map(pst=> <Posts key={pst.id} Post={pst}> </Posts>)
      }
    
     </div> 
  )
};

export default Home;