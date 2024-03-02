import { FC } from 'react';
import { MouseTrailComponent } from './MouseTrailComponent';

const GalleryComponent: FC = () => {
  return (
    <div>
      <div className='flex flex-col'>
            <a href="/gallery">
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
                    <span className="inline bg-gradient-to-r from-[#f47575]  to-[#ff1515] hover:text-white text-transparent bg-clip-text">
                        GALLERY
                    </span>
                </h2>
            </a>
            <MouseTrailComponent/>
      </div>
    </div>
  );
}

export default GalleryComponent;