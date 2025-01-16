"use client"; // Ensure this is at the top of your file to mark it as a client component

import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '100%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
