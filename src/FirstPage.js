import React from 'react';
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <div>
      <h1>First Page</h1>
      <Link to="/second">
        <button>Go to Second Page</button>
      </Link>
    </div>
  );
}

export default FirstPage;
