import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images');
    
    // Check if the images directory exists
    try {
      const files = await readdir(imagesDir);
      
             // Filter for image files (only jpg, jpeg, png)
       const imageExtensions = ['.jpg', '.jpeg', '.png'];
       const imageFiles = files.filter(file => 
         imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
       );

       if (imageFiles.length === 0) {
        return NextResponse.json({ images: [] });
       }
      
      // Convert to URLs
      const imageUrls = imageFiles.map(file => `/images/${file}`);
      
      return NextResponse.json({ images: imageUrls });
    } catch (error) {
      // Directory doesn't exist or can't be read
      return NextResponse.json({ images: [] });
    }
  } catch (error) {
    console.error('Error reading images directory:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
} 