import React from 'react';
import './App.css';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' }
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
];

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  const coursedet = showCourses && (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );

  const bookdet = showBooks ? (
    <ul>
      {books.map((book) =>
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      )}
    </ul>
  ) : (
    <p>Books are currently hidden.</p>
  );

  let content;
  if (showBlogs) {
    content = (
      <div>
        {blogs.map(blog => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    );
  } else {
    content = <p>Blogs are currently hidden.</p>;
  }

  return (
    <div>
      <div className="container">
        
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
        
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>
        
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>
        
      </div>
    </div>
  );
}

export default App;