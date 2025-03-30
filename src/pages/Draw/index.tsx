import React from 'react';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css'

const Draw: React.FC = () => {

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw />
    </div>
  );
};

export default Draw;