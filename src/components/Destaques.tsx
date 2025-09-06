"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export const Destaques = () => {
  const product = {
    name: "Nike Pegasus 41 shoes",
    category: "Sports",
    price: 189,
    offerPrice: 159,
    rating: 4,
    images: ["/shoe1.jpg", "/shoe2.jpg", "/shoe3.jpg", "/shoe4.jpg"],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    product && (
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:gap-6 mt-4 items-start justify-between">
          {/* Coluna da esquerda - Imagens */}
          <div className="flex flex-col gap-3 w-full lg:w-1/2 lg:pr-3">
            {/* Imagem principal */}
            <div className="border border-gray-500/30 rounded-md overflow-hidden w-full">
              <div className="aspect-square relative">
                <Image
                  src={thumbnail}
                  alt="Selected product"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Miniaturas em linha horizontal */}
            <div className="flex flex-row gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div
                  key={image}
                  onClick={() => setThumbnail(image)}
                  className={`border-2 rounded-md overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-200 ${
                    thumbnail === image
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da direita - Informações do produto */}
          <div className="text-sm w-full lg:w-1/2 lg:pl-3">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i ? (
                    <svg
                      key={i}
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                        fill="#615fff"
                      />
                    </svg>
                  ) : (
                    <svg
                      key={i}
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                        fill="#615fff"
                        fillOpacity="0.35"
                      />
                    </svg>
                  )
                )}
              <p className="text-base ml-2">({product.rating})</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ${product.price}
              </p>
              <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="flex items-center mt-8 sm:mt-10 gap-4 text-base">
              <a
                id="contact"
                data-aos="fade-up"
                data-aos-delay="500"
                target="_blank"
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-400 hover:bg-green-500 transition-colors px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 text-white"
                rel="noopener noreferrer"
              >
                <WhatsappLogo className="w-5 h-5" />
                Peça agora mesmo!
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
