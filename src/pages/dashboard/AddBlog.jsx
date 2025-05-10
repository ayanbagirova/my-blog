
import React from 'react'
import BlogForm from './BlogForm'
import { addBlog } from "../../tools/actions/blog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Add Blog</h1>
        <BlogForm formData={(fd)=>{dispatch(addBlog(fd)),
            navigate('/dashboard')
        }}/>
    </div>
  )
}

export default AddBlog