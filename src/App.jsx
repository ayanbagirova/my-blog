import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from "./components/Login";
import BlogDetails from './pages/BlogDetails';
import BlogList from './pages/dashboard/BlogList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Container from 'react-bootstrap/Container';
import AddBlog from './pages/dashboard/AddBlog';
import EditBlog from './pages/dashboard/EditBlog';
import Footer from './layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
          <Route path="/dashboard" element={<BlogList />}></Route>
          <Route path="/dashboard/add" element={<AddBlog />}></Route>
          <Route path="/dashboard/edit/:slug" element={<EditBlog />}></Route>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;