import React from 'react';
// import './style.css'
import object from './Blog.module.css'
import {mess} from './utils';
const Blog=(prop)=>{
    mess(prop);
    return(
    <div className={object.blog}>
    <h1 className='heading'>{prop.title}</h1>
    <p>{prop.description}</p>
    </div>
    )
}

export default Blog;