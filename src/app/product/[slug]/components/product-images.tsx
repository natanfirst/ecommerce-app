"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  image_urls: string[];
}

const ProductImages = ({ image_urls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(image_urls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex h-[380px] lg:h-[740px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] lg:max-h-none w-auto max-w-[80%] lg:max-w-none"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:absolute lg:grid-cols-1">
        {image_urls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] lg:h-[77px] lg:w-[77px] items-center justify-center rounded-lg bg-accent lg:bg-black
                ${
                  imageUrl === currentImage &&
                  "border-2 border-solid border-primary"
                }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;