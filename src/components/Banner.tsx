import React, { useState, useEffect } from 'react';

const ImageBanner = ({ images }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const id = setInterval(nextSlide, 5000);

        return () => clearInterval(id);
    }, [images]);

    return (
        <div
            className="relative hover:opacity-80 transition-opacity"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '600px', height: '300px' }}
        >
            {images.map((image: any, index: number) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover ${currentIndex === index ? 'block' : 'hidden'}`}
                />
            ))}
            {isHovered && (
                <>
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageBanner;
