import { useState, useEffect, useMemo } from 'react';

// Cache for already loaded images
const imageCache = new Set();

/**
 * Hook to preload images and track loading state
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Object} - { imagesLoaded: boolean, progress: number }
 */
export const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Memoize the image URLs to prevent re-running effect on every render
  const urls = useMemo(() => imageUrls || [], [JSON.stringify(imageUrls)]);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setImagesLoaded(true);
      setProgress(100);
      return;
    }

    // Filter out already cached images
    const uncachedUrls = urls.filter(url => !imageCache.has(url));
    
    if (uncachedUrls.length === 0) {
      // All images already cached
      setImagesLoaded(true);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = uncachedUrls.length;

    const imagePromises = uncachedUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          imageCache.add(src); // Add to cache
          resolve(src);
        };
        
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          console.warn(`Failed to preload image: ${src}`);
          imageCache.add(src); // Add to cache anyway to prevent retry
          resolve(src);
        };
        
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });

  }, [urls]);

  return { imagesLoaded, progress };
};

/**
 * Component to preload images in the document head
 */
export const ImagePreloader = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((src, index) => (
        <link key={index} rel="preload" as="image" href={src} />
      ))}
    </>
  );
};
