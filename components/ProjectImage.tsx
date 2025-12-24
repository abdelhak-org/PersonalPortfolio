"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  fallbackEmoji?: string;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  fallbackEmoji = "🚀",
  className = "",
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className={`w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center ${className}`}
      >
        <span className="text-6xl">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-48 rounded-lg overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
