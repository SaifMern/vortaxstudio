'use client';

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="w-full h-full">
      {/* 
        Replace this URL with your own Spline scene URL
        Get one from: https://spline.design/
        
        For now, this is a placeholder. To add your scene:
        1. Create a scene on spline.design
        2. Click "Export" → "Code Export" → "React (SPLine)"
        3. Copy the scene URL
        4. Replace the URL below
      */}
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}