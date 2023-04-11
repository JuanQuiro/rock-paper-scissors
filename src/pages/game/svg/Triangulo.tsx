import React from 'react';

interface Props {
width?: number;
height?: number;
className?: string;
}

const ExampleComponent: React.FC<Props> = ({ width = 203, height = 169, className = '' }) => {
  return (
    <div className="absolute top-72 mx-auto">
      
<svg  width={width} height={height} viewBox="0 0 203 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M101.5 159L194 5H9L101.5 159Z" stroke="black" strokeWidth="10"/>
</svg>
  </div>
);
};

export default ExampleComponent;