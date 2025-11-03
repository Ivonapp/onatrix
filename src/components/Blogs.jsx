import React from 'react'
import Blogcolumn from './Blogcolumn';
import Titlelayout from './Titlelayout';

function Blogs() {
  return (
    <div>
        <Titlelayout
        title ="Latest Blog and News"
        middletitle ="Check Out Our Latest Blog and News Update"
        ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
        />

        <Blogcolumn />
    </div>

  )
}

export default Blogs