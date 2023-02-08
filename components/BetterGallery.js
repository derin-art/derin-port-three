import SwipeableViews from "react-swipeable-views";
import Image from "next/image";
import { useState } from "react";

export default function BetterGallery({ imageArray }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  return (
    <div className="w-fit">
      <div className="w-fit">
        <SwipeableViews
          onChangeIndex={(index) => {
            setGalleryIndex(index);
          }}
          enableMouseEvents
          index={galleryIndex}
        >
          {imageArray.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src}
                height={350}
                width={700}
                unoptimized={true}
                className="w-full"
                alt="Portfolio image"
              ></Image>
            );
          })}
        </SwipeableViews>
        <div className="flex space-x-4 py-4  items-center  justify-center">
          {imageArray.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setGalleryIndex(index);
                }}
                key={index}
                className={`h-2 duration-300 w-2 ${
                  galleryIndex === index ? "bg-ultraGray" : "bg-gray-300"
                } rounded-full`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
