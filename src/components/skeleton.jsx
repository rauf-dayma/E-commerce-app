import React from 'react';
import './styles/Skeleton.css'; // Assuming you style the skeleton with CSS

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-item" />
      <div className="skeleton-item" />
      <div className="skeleton-item" />
      {/* Add more skeleton items as placeholders */}
    </div>
  );
}

export default Skeleton;
