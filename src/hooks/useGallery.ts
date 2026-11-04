import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { galleryImages } from "@/assets/images";

export function useGallery() {
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function move(direction: number) {
    setIndex((current) => (current + direction + galleryImages.length) % galleryImages.length);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
      move(deltaX < 0 ? 1 : -1);
    }
  }

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return { index, move, selectedImage, setSelectedImage, closeImage, onTouchStart, onTouchEnd };
}
