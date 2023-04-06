import React from 'react';
import './index.scss';
import imageItem1 from './Images/image1.png'
import imageItem2 from './Images/image2.png'
import imageItem3 from './Images/image3.png'
import imageItem4 from './Images/image4.png'
import imageItem5 from './Images/image5.png'
import imageItem6 from './Images/image6.png'
import imageItem7 from './Images/image7.png'
import imageItem8 from './Images/image8.png'
const images = [
  { id: 1, src: imageItem1, caption:'Todos' },
  { id: 2, src: imageItem2, caption:'Mac'  },
  { id: 3, src: imageItem3, caption:'iPad'  },
  { id: 4, src: imageItem4, caption:'iPhone'  },
  { id: 5, src: imageItem5, caption:'Apple Watch'  },
  { id: 6, src: imageItem6, caption:'AirPods'  },
  { id: 7, src: imageItem7, caption:'Apple TV 4K'  },
  { id: 8, src: imageItem8, caption:'Accessories'  },
];

const Underslider = () => {
  return (
    <div className="image-container">
      {images.map((image) => (
        <div className='image-wrapper'>
          <img
            src={image.src}
            alt=''
          />
          <div className="caption">{image.caption}</div>        
          </div>
      ))}
    </div>
  );
};

export default Underslider;
