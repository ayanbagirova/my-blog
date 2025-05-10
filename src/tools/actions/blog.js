import supabase from "../../utils/supabase";



export const getBlog = (blogs)=>({
  type:"GET_BLOG",
  blogs
})


export const addBlog = async ({ img, title, author,time }) => {
  const { error } = await supabase
    .from("blog-data")
    .insert({ img:img,title:title,author:author,time:time });
    if (error) {
      console.log(error);
    }else{
      console.log('Blog added successfully!');
      window.location.assign('/dashboard');
    }
};
// export const addBlog = ({img,title,author,time})=>({
//     type:"Create_Blog",
//     blog:{
//       id:crypto.randomUUID(),
//       img,
//       title,
//       author,
//       time  
//     }
//   })
export const deleteBlog = async (id) => {
  const response = await supabase
  .from('blog-data')
  .delete()
  .eq('id', id);
  if (response) {
    console.log("Blog deleted successfully!");
    window.location.reload();
  }else{
    console.log("Something went wrong!");
  }
};
export const editBlog = async(id, editdata ) => {
  const { error } = await supabase
  .from('blog-data')
  .update(editdata)
  .eq('id', id);
  if (error) {
    console.log(error);
  }else{
    console.log('Blog updated successfully!');
    window.location.assign('/dashboard');
  }
};
  // export const deleteBlog = (id) => ({
  //   type: 'Remove_Blog',
  //   id,
  // });
  
  // export const editBlog = ({ id, editdata }) => ({
  //   type: 'Update_Blog',
  //   id,
  //   editdata,
  // });
