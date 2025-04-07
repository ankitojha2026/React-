
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import './components/Header.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SideBar from './components/SideBar.jsx'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import { useState } from 'react'
import PostListProvider from './store/PostListStore.jsx'
function App() {
 
  const[slidTab , setSlidTab]=useState("Home")

  return (
<PostListProvider>
  <div className='App_Container'>
      
    <SideBar slidTab={slidTab} setSlidTab={setSlidTab}></SideBar>


   <div className='content'>
   <Header></Header>


   {   

    (slidTab==='Home')?<PostList></PostList> : <CreatePost></CreatePost>  
   }


   <Footer></Footer>
   
   </div>
  </div></PostListProvider>
   
  )
}
 
export default App;
