import React from "react";
import BlogForm from "./BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import { editBlog } from "../../tools/actions/blog";

const EditBlog = () => {
  const data = useSelector((p) => p.blog);
  const { slug } = useParams();
  const filteredData = data.find(
    (item) => slugify(item.title, { lower: true }) === slug
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="my-5 text-center">Edit Blog</h1>
      <BlogForm editdata={filteredData} formData={(fd)=>{dispatch(editBlog({id:filteredData.id,editdata:fd})),
                  navigate('/dashboard')
              }} />
    </div>
  );
};

export default EditBlog;