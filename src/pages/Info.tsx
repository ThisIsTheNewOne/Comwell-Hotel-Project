import React from 'react';
import LocalizedLink from '@/components/molecules/LocalizedLink';

const Info: React.FC = () => {
  return (
    <div>
      <h1>Info Page</h1>
      <LocalizedLink href="/"> {/* Add the Link component */}
        <button>Go to Home Page</button>
      </LocalizedLink>
    </div>
  );
};

export default Info;