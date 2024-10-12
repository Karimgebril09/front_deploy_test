import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div>
      <h1>Second Page</h1>
      <Link to="/">
        <button>Return to First Page</button>
      </Link>
      <Link to="/third">
        <button>Go to Third Page</button>
      </Link>
    </div>
  );
}

export default SecondPage;
