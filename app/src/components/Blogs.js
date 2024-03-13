import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';


const Blogs = () => {
  const { loading, posts } = useContext(AppContext); 
  
  return (
    <div className='w-11/12 h-screen max-w-[670px] py-3 flex flex-col gap-y-7 mt-[60px] flex justify-content items-center'>
      {loading ? (
        <Spinner  />
      ) : (
        posts.length === 0 ? (
          <div>
            <p>No Post Found</p>
          </div>
        ) : (
          posts.map((post) =>(
            <div key={post.id}>
              <p className=' font-bold text-sm'>{post.title}</p>
              <p className='text-[10px]'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'> {post.category}</span>
              </p>
              <p className='text-[10px]'>Posted on{post.date}</p>
              <p className='text-[12px] mt-[10px]'>{post.content}</p>
              <div className='flex gap-x-3'>
                {
                  post.tags.map((tag,index)=>{
                    return <span className='text-blue-500 underline font-bold text-[12px]' key={index}> {`#${tag}`} </span>
                  })
                }
              </div>
            </div>

          ))
        )
      )}
    </div>
  );
};

export default Blogs;
