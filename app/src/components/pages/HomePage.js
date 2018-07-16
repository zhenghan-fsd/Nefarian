import React from 'react';

import Card from '../partials/Card';

const HomePage = () => {
  return <div> {[1, 2, 3].map(i => <Card key={i} />)}</div>;
};

export default HomePage;
