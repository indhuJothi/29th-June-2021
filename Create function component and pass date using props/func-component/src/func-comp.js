import React from 'react';
import {mess} from './utils';
const Blog=(prop)=>{
    mess(prop);
    return(
    <div className='blog'>
    <h1 className='heading'>{prop.title}</h1>
    <p>{prop.description}</p>
    </div>
    )
}

export default Blog;