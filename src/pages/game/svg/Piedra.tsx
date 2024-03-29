'use client'
import React from 'react';

const Piedra: React.FC = () => {
  const [hover, setHover] = React.useState(false);

    return (
      
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
<path className="transition ease-in-out duration-300" strokeWidth={hover ? 2 : 1} stroke={hover ? '#1E90FF' : 'black'} id="Vector" d="M33.6512 9.57098C33.1762 3.57398 26.4432 4.18598 26.4432 4.18598C23.6012 -0.824024 19.1622 2.80498 19.1622 2.80498C15.7522 -2.10602 11.4752 2.44498 11.4752 2.44498C4.10221 1.64898 4.38821 7.67898 4.38821 7.67898C4.21521 9.59598 5.42821 15.526 5.42821 15.526C4.33421 12.108 1.96121 14.945 1.96121 14.945C-0.955793 19.447 1.24021 21.912 1.24021 21.912C5.18721 26.538 13.5972 32.092 13.5972 32.092C16.6432 33.837 15.3542 35.392 15.3542 35.392L33.7742 32.348L34.1982 28.854C36.9982 20.382 33.6512 9.56997 33.6512 9.56997V9.57098Z" fill="#3C4262"/>
</svg>

  );
};

export default Piedra;