import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

import './App.css';
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';


function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
fetchBlogPosts();
  },[])

  return (
   <Routes>
    <Routes path="/" element={<Home/>}/>
    <Routes path="/blog/:blogId" element={<BlogPage/>}/>
    <Routes path="/tags/:tag" element={<TagPage/>}/>
    <Routes path="/categories/:categories" element={<CategoryPage/>}/>
   </Routes>
  );
}

export default App;
