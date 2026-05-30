"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src?: string | null;
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
        className={`flex h-52 w-full items-center justify-center overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_25%_20%,hsl(var(--primary)/0.26),transparent_34%),radial-gradient(circle_at_75%_70%,hsl(var(--accent)/0.18),transparent_32%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--card)))] ${className}`}
      >
        <span className="text-6xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-110">
          {fallbackEmoji}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative h-52 w-full overflow-hidden border-b border-border/70 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
