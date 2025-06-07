'use client';

import { BoxLoading } from 'react-loadingg';

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2D3C3', 
      }}
    >
      <BoxLoading color="#528d6f" speed={2} size="largest" style={{ transform: 'scale(2)' }} />
    </div>
  );
}