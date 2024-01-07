import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8000/posts')
    .then(response => response.json())
    .then(data => {
        setData(data)})
    .catch(error => {
      // Handle fetch errors
      console.error('Fetch error:', error);
    });
    return () => {}
  }, []);

  return (
    <div>
      <h1>Mocked API Data:</h1>
      <ul>
        { data && data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;