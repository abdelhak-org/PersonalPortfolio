"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  src?: string | null;
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
        className={`${sizeClasses[size]} flex items-center justify-center rounded-[2rem] border border-border/70 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.3),transparent_32%),radial-gradient(circle_at_75%_70%,hsl(var(--accent)/0.18),transparent_34%),linear-gradient(135deg,hsl(var(--card)),hsl(var(--secondary)))] shadow-[0_30px_100px_-55px_hsl(var(--primary))] ${className}`}
      >
        <User className={`${iconSizes[size]} text-primary/70`} />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} relative overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_30px_100px_-55px_hsl(var(--primary))] ${className}`}
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
