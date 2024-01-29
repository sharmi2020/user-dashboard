import React from 'react';
import {useState} from 'react';
import{useEffect} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate=useNavigate()
    const[posts,setPosts]=useState([])
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(json=>setPosts(json))
        .finally(()=>{
            setLoading(false);
        })
    },[])
 
    const deletePosts=(id)=>{
        const updatePosts=posts.filter((post)=>post.id!==id);
        setPosts(updatePosts)
    }
  return (
    <div className="posts">
        {loading?(
<div>Loading...</div>
        ):(
            <>
        <h1>user posts</h1>
      <table border={1}>
<tr>
    <th>userId</th>
    <th>id</th>
    <th>title</th>
    
</tr>

{/*mapping the post to get all the value*/}

{posts.map(post=>(
    <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}
        </td>
        <button className="delete" onClick={()=>{
            deletePosts(post.id)
        }} >delete</button>
</tr>
))}
</table>
</>
)}
<div className="button-container">
        <input type="submit" 
        onClick={()=>{
            navigate('/Barchart')
        }}
        />
    </div>
    </div>
  )
    }

    export default Dashboard
  