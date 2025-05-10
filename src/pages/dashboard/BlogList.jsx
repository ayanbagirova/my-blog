import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../../tools/actions/blog';
import slugify from 'slugify';

const BlogList = () => {
  const data = useSelector((p) => p.blog);
    const dispatch = useDispatch();
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Link to="/dashboard/add" className="btn-add">
        Add{' '}
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.img} alt={item.title} className="logo" />
              </td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
              <Link className="edit-btn" to={`/dashboard/edit/${slugify(item.title,{lower:true})}`} >
                  Edit
                </Link>
              </td>
              <td>
                <button className="delete-btn"  onClick={() => {
                    dispatch(deleteBlog(item.id));
                  }}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BlogList