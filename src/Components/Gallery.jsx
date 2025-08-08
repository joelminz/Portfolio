import React from 'react';
import '../Styles/Gallery.css';

const images = [
  { src: '/Images/g1.jpg', alt: 'Me 1', orientation: 'horizontal' },
  { src: '/Images/g2.jpg', alt: 'Me 2', orientation: 'horizontal' },
  { src: '/Images/g3.jpg', alt: 'Me 3', orientation: 'vertical' },
  { src: '/Images/g4.jpg', alt: 'Me 4', orientation: 'horizontal' },
  { src: '/Images/g5.jpg', alt: 'Me 5', orientation: 'horizontal' },
  { src: '/Images/g6.jpg', alt: 'Me 6', orientation: 'vertical' },
  { src: '/Images/g7.jpg', alt: 'Me 7', orientation: 'horizontal' },
  { src: '/Images/g8.jpg', alt: 'Me 8', orientation: 'horizontal' },
  { src: '/Images/g9.jpg', alt: 'Me 9', orientation: 'horizontal' },
  { src: '/Images/g10.jpg', alt: 'Me 10', orientation: 'horizontal' },
  { src: '/Images/g11.jpg', alt: 'Me 11', orientation: 'horizontal' },
  { src: '/Images/g12.jpg', alt: 'Me 12', orientation: 'vertical' },
  { src: '/Images/g13.jpg', alt: 'Me 13', orientation: 'horizontal' },
  { src: '/Images/g14.jpg', alt: 'Me 14', orientation: 'horizontal' },
  { src: '/Images/g15.jpg', alt: 'Me 15', orientation: 'horizontal' },
  { src: '/Images/g16.jpg', alt: 'Me 16', orientation: 'horizontal' },
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="text-center mb-4">Gallery</h1>
      <div className="gallery-grid-2col">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item-2col">
            <img
              src={img.src}
              alt={img.alt}
              className={`gallery-img-2col ${img.orientation}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

