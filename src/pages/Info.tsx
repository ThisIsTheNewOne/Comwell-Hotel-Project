import React from 'react';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <div>
      <h1>Info Page</h1>
      <Link href="/"> {/* Add the Link component */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default Info;