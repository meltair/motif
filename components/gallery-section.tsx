"use client";

import Image from "next/image";
import { useState } from "react";

export interface GalleryItem {
  src: string;
  title: string;
  caption: string;
}

interface GallerySectionProps {
  gallery: GalleryItem[];
}

export default function GallerySection({ gallery }: GallerySectionProps) {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="mx-auto mb-10 max-w-5xl text-center">
        <h2 className="mt-3 text-balance text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
          Actual Motif UI visuals, pulled into the story
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Real interface captures from Motif UI, presented as visual proof
          points across navigation, forms, states, and component surfaces.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item) => (
          <button
            key={item.src}
            onClick={() => setActiveImage(item)}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-[240px] w-full bg-slate-100">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top transition duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[24px] border border-slate-700 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {activeImage.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {activeImage.caption}
                </p>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="bg-slate-100 p-4">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                width={1800}
                height={1200}
                className="max-h-[80vh] w-full rounded-[16px] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}