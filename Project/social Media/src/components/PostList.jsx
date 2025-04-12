import { useContext, useEffect } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/PostListStore';
import WellcomeMessage from './WellcomMessage';
import Loading from './Loading';


const PostList = ()=> {

   const {postList , addPosts }=useContext(PostListData);

    const [fetchPosts, setFetchPosts] = useState(false);

    useEffect(() => {
        
        setFetchPosts(true);
        // Fetch posts from the API
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {addPosts(data.posts)});
        setFetchPosts(false);

    },[]);
    
    return (
    
    <div style={{display:'flex', gap:'20px', margin:'20px 20px', flexWrap:'wrap'}} className="PostList" >


    {fetchPosts && <Loading/>}
   {postList.length===0 && <  WellcomeMessage/>}
    
    {postList.map((post) => (<Post key={post.id} post={post} />))}
    
    </div>    
    
    );
}
export default PostList;