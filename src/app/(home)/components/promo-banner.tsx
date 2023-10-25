import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";

const PromoBanner = ({ alt, className,  ...props }: ImageProps) => {
  return (
    <Image
      className={cn("h-auto w-full", className)}
      sizes="100vw"
      width={350}
      height={150}
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
