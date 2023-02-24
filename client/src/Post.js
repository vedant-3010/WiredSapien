import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="image">
                <img
                    src="https://res.cloudinary.com/didf67ktw/image/upload/v1676030251/cld-sample.jpg"
                    alt="logo"
                />
            </div>

            <div className="texts">
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                    sapiente.
                </h2>
                <p className="info">
                    <a href="" className="author">
                        vecdant dandge
                    </a>
                    <time> 2023-01-06 16:45</time>
                </p>
                <p className="summary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    inventore odio! Quo cumque ipsum quos vel eaque dolores hic! Dolor.
                </p>
            </div>
        </div>
    )
}

export default Post