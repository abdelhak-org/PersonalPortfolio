"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ProfileImage({
  src,
  alt,
  size = "lg",
  className = "",
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64 sm:w-80 sm:h-80",
  };

  const iconSizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  if (!src || imageError) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center ${className}`}
      >
        <User className={`${iconSizes[size]} text-primary/40`} />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} relative rounded-2xl overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        priority
        sizes="(max-width: 640px) 256px, 320px"
      />
    </div>
  );
}
