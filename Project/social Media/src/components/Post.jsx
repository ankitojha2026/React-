import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";

const Post = ({post}) => 
{

const {deletePost}=useContext(PostListData);

return (
    <div className="card" style={{width: "18rem"}}>

   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
   <AiOutlineDelete />
  </span>    
  <img src={post.PostImage} className="card-img-top" alt="bird"/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary">{tag}</span>)}

    


  </div>
</div>
)
}
export default Post; 