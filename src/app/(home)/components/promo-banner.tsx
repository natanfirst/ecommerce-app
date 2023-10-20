import { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      className="h-auto w-full"
      sizes="100vw"
      width={350}
      height={150}
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
