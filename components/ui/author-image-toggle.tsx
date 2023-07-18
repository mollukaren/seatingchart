import React, { useState } from 'react';
import Image from 'next/image';
import { HelloSticker } from '../logos/my_name_is_sticker';

const ImageToggle = () => {
  const [showSvg, setShowSvg] = useState(true);

  const handleClick = () => {
    setShowSvg((prevShowSvg) => !prevShowSvg);
  };

  return (
    <div onClick={handleClick}>
      {showSvg ? (
      <HelloSticker />
      ) : (
        <Image src="/images/Prof_Pic.png" alt="Profile Picture of Michael, the author" width={300} height={200} />
      )}
    </div>
  );
};

export default ImageToggle;