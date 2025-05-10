import React from "react";

const Home = () => {
  return (
    <>
     <div className="px-4 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">Welcome to our Cookies blog</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">At our Cookies blog , we believe every great moment starts with a cookie. Whether you’re a seasoned baker, a casual snacker, or just love scrolling through sweet treats, you’ve come to the right place.</p>

        </div>
        <div className="overflow-hidden" >
          <div className="container px-5">
            <img src="https://i.pinimg.com/736x/fe/54/18/fe5418d9fb769c82d953f6a06602e46d.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={750} height={500} loading="lazy"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;