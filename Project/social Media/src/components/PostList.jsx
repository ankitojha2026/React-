import { useContext } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/PostListStore';


const PostList = ()=> {

   const {postList}=useContext(PostListData);

    
    return (
    
    <div style={{display:'flex', gap:'20px', margin:'20px 20px'
    }}>
    
    {postList.map((post) => (<Post key={post.id} post={post} />))}
    
    </div>    
    
    );
}
export default PostList;