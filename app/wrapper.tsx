import './wrapper.css';
import React from 'react';

export default function Wrapper({
  children,
  year,
} : {
  children: React.ReactNode,
  year: string,
}) {
  return (
    <div>
      <p className="card-text relative top-7 -z-10">{year}</p>
      <div>
        {children}
      </div>
    </div>
  );
}