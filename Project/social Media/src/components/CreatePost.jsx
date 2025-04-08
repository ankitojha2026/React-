import { useContext , useRef } from 'react';
import {PostList as PostListData} from '../store/PostListStore';

import '../App.css';

const CreatePost = () =>
{

const Title=useRef();
const Discription=useRef();  
const PostId=useRef();
const PostImage=useRef();
const UserName=useRef();

const {addPost} = useContext(PostListData);

const postHandler=()=>{


    const post={
        title:Title.current.value,
        discription:Discription.current.value,
        id:PostId.current.value,
        userName:UserName.current.value,
        postImage:PostImage.current.files[0],
    }
    console.log(post);
  }
    return (

        <form className="CreatePost" onSubmit={()=>{postHandler()}}>

  <div className="mb-3">
    <label htmlFor="title" className="htmlForm-label">Title:  </label>
    <input ref={Title} type="text" className="htmlForm-control" id="title"  placeholder='Enter title..' />
  </div>

  <div className="mb-3">
    <label htmlFor="Discription" className="htmlForm-label">Discription:  </label>
    <input  ref={Discription} type="text" className="htmlForm-control" id="Discription"  placeholder='Enter Discription..' />
  </div>


  <div className="mb-3">
    <label htmlFor="PostId" className="htmlForm-label">Id:  </label>
    <input ref={PostId} type="number" className="htmlForm-control" id="PostId"  placeholder='Enter title..' />
  </div>

  <div className="mb-3">
    <label htmlFor="userName" className="htmlForm-label">User Name:  </label>
    <input ref={UserName} type="text" className="htmlForm-control" id="userName"  placeholder='Enter userName..' />
  </div>

  <div className="mb-3">
    <label htmlFor="PostImage" className="htmlForm-label">Post Image:  </label>
    <input ref={PostImage} type="file" className="htmlForm-control" id="postImage"  placeholder='Enter userName..' />
  </div>



  <button className="btn btn-primary">post</button>
</form>
    )
};
export default CreatePost;