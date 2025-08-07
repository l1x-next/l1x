// Function to get all images from public/images folder
const getImagesFromFolder = (): string[] => {
  // In Next.js, we can't directly read the filesystem on the client side
  // So we'll use a different approach - either static imports or API routes
  // For now, let's create a function that can be easily updated
  
  // Option 1: Static imports (recommended for known images)
  // You can add your images here manually:
  const staticImages: string[] = [
    // Add your image paths here, for example:
    // '/images/image1.jpg',
    // '/images/image2.png',
    // '/images/image3.webp',
  ];
  
  return staticImages;
};

// Function to dynamically load images from public/images folder
const loadImagesDynamically = async (): Promise<string[]> => {
  try {
    const response = await fetch('/api/images');
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    
    const data = await response.json();
    return data.images || [];
  } catch (error) {
    console.error('Error loading images:', error);
    return [];
  }
};

// Export the images array with the function result
export const images = getImagesFromFolder();

// Export the function for dynamic loading if needed
export const getHeroImages = async (): Promise<string[]> => {
  return await loadImagesDynamically();
};
