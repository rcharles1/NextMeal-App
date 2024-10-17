/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CloseIcon } from '../svgs/InterfaceSvg';

const Gallery = ({ listing, listingGallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const listingName = listing.name.replace(/\s+/g, '').toLowerCase();

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        {listingGallery.slice(0, 1).map((src, index) => (
          <div key={index} className='relative' >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t h-1/6 from-slate_white/85 to-transparent z-10"></div>
            <div className="relative overflow-hidden px-0">
              <img
                src={`/assets/img/gallery/restaurants/${listingName}/${src}.webp`}
                className="object-cover w-full mx-auto h-80 rounded cursor-pointer"
                alt={`project-gallery-${index}`}
                onClick={() => openModal(index)}
              />
              <button
                onClick={() => openModal(index)}
                className="absolute bottom-5 z-10 bg-bg_variant1 outline left-1/3 p-2 text-center font-bold text-pure_white text-base rounded-2xl w-fit"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-light_dark/90 bg-opacity-75 z-30">
          <div className="relative w-full h-screen overflow-auto bg-white p-1 rounded-lg">
            <button className="absolute rounded top-20 right-8 text-black" onClick={closeModal}>
              <CloseIcon fill="red" />
            </button>
            <div className="flex flex-wrap mt-28 p-2 outline-cyan600">
              {listingGallery.map((src, index) => (
                <img
                  key={index}
                  src={`/assets/img/gallery/restaurants/${listingName}/${src}.webp`}
                  className="object-cover object-center w-full h-auto p-2 pb-10 transform transition-transform duration-300 hover:scale-125"
                  alt={`project-image-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;