import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from './imports';

const Blog = () => {
  return (
    <div className="container section__padding blog_mb" id="blog">
      <div className="gpt3__blog">
        <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is Happening, We are Blogging About It.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_group">
              <Article imgUrl = {blog01} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
            <Article imgUrl = {blog02} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
            <Article imgUrl = {blog03} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
            <Article imgUrl = {blog04} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
            <Article imgUrl = {blog05} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
            <Article imgUrl = {blog06} date = 'Sep 26, 2021' title='Ope Al is the future. Let us exlore how it is?'/>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Blog;