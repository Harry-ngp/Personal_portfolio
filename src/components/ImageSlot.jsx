import { Camera } from 'lucide-react';

/**
 * Reusable image placeholder component.
 * Shows a dashed border + camera icon when no `src` is provided.
 * Renders the actual image when `src` is passed.
 *
 * Usage:
 *   <ImageSlot src="/path/to/image.jpg" alt="My photo" className="w-64 h-64" />
 *   <ImageSlot alt="Profile Photo" className="w-64 h-64 rounded-full" />
 */
export default function ImageSlot({ src, alt = 'Image', className = '', rounded = false }) {
  const roundedClass = rounded ? 'rounded-full' : 'rounded-xl';

  if (src) {
    return (
      <div className={`overflow-hidden ${roundedClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`image-slot ${roundedClass} ${className}`}>
      <Camera className="w-10 h-10 mb-2 opacity-40" />
      <span className="text-sm font-medium opacity-50">{alt}</span>
      <span className="text-xs opacity-30 mt-1">Drop your image here</span>
    </div>
  );
}
