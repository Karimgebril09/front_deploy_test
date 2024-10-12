import React from 'react';
import { Link } from 'react-router-dom';

function ThirdPage() {
  return (
    <div>
      <h1>Third Page</h1>
      <Link to="/second">
        <button>Return to Second Page</button>
      </Link>
      <Link to="/">
        <button>Return to First Page</button>
      </Link>
    </div>
  );
}

export default ThirdPage;
