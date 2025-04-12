import { useContext , useRef } from 'react';
import {PostList as PostListData} from '../store/PostListStore';

import '../App.css';

const CreatePost = () =>
{

const Title=useRef();
const Discription=useRef();  
const Reaction=useRef();
const PostImage=useRef();
const UserName=useRef();

const {addPost} = useContext(PostListData);

const postHandler=()=>{


    const post={
        title:Title.current.value,
        discription:Discription.current.value,
        Reaction:Reaction.current.value,
        userName:UserName.current.value,
        postImage:PostImage.current.files[0],
    }

   


    addPost(post);
  
    Title.current.value="";
    Discription.current.value="";
    Reaction.current.value=""; 
    UserName.current.value="";
    PostImage.current.value="";
  }


    
    return (

        <form className="CreatePost" onSubmit={()=>{postHandler()}}>

  <div className="mb-3">
    <label htmlFor="title" className="htmlForm-label">Title:  </label>
    <input ref={Title} type="text" className="htmlForm-control" id="title"  placeholder='Enter title..' required />
  </div>

  <div className="mb-3">
    <label htmlFor="Discription" className="htmlForm-label">Discription:  </label>
    <input  ref={Discription} type="text" className="htmlForm-control" id="Discription"  placeholder='Enter Discription..' required />
  </div>


  <div className="mb-3">
    <label htmlFor="Reaction" className="htmlForm-label">Reaction: </label>
    <input ref={Reaction} type="number" className="htmlForm-control" id="Reaction"  placeholder='Enter Reaction...' required />
  </div>

  <div className="mb-3">
    <label htmlFor="userName" className="htmlForm-label">User Name:  </label>
    <input ref={UserName} type="text" className="htmlForm-control" id="userName"  placeholder='Enter userName..' required />
  </div>

  <div className="mb-3">
    <label htmlFor="PostImage" className="htmlForm-label">Post Image:  </label>
    <input ref={PostImage} type="file" className="htmlForm-control" id="postImage"  placeholder='Enter userName..'/>
  </div>



  <button type="submit" className="btn btn-primary">post</button>
</form>
    )
};
export default CreatePost;