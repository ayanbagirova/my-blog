import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { useSelector} from 'react-redux';

const Blog = () => {
    const data = useSelector((p) => p.blog);
    return (
        <>
            <div className="card-container">
                {data.map((item, index) => (
                    <div key={index} className="custom-card">
                        <img src={item.img} alt={item.title} className="card-img" />
                        <div className="card-overlay">
                            <div className="card-time">
                                <span className="clock-icon"><FaRegClock />
                                </span>{item.time} min
                            </div>
                            <div className="card-info">
                                <p className="card-label">RECIPE</p>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-author">by {item.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Blog;