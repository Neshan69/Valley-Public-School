import { galleryImages } from "@/assets/images";
import { Icon } from "@/components/common/Icon";
import { useGallery } from "@/hooks/useGallery";

export function GalleryPage() {
  const { index, move, selectedImage, setSelectedImage, closeImage, onTouchStart, onTouchEnd } = useGallery();
  return <section className="space-y-8">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Campus life</span><h1 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Valley Public School Gallery</h1><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Real moments and places from our school community.</p></div><p className="text-xs font-medium text-slate-400 sm:pb-1" aria-live="polite">{index + 1} / {galleryImages.length}</p></div>
    <div className="relative mx-auto w-full max-w-5xl px-12 sm:px-16">
      <button type="button" onClick={() => move(-1)} aria-label="Show previous photo" className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 text-slate-700 shadow-md transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white dark:hover:bg-slate-800 sm:p-3"><Icon name="arrow-left" className="h-5 w-5" /></button>
      <div className="overflow-hidden rounded-2xl touch-pan-y" aria-label="School photo gallery" aria-roledescription="carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}><div className="flex w-full flex-nowrap transition-transform duration-500 ease-out will-change-transform" style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}>
        {galleryImages.map((image) => <figure key={image.src} className="w-full shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"><button type="button" className="block w-full cursor-zoom-in" onClick={() => setSelectedImage(image)} aria-label={`View full-size image: ${image.caption}`}><img src={image.src} alt={image.alt} loading="lazy" className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[320px]" /></button><figcaption className="p-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{image.caption}</figcaption></figure>)}
      </div></div>
      <button type="button" onClick={() => move(1)} aria-label="Show next photo" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 text-slate-700 shadow-md transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white dark:hover:bg-slate-800 sm:p-3"><Icon name="arrow-right" className="h-5 w-5" /></button>
    </div>
    {selectedImage && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Full-size school photo" onClick={(event) => { if (event.target === event.currentTarget) closeImage(); }}><button type="button" onClick={closeImage} aria-label="Close full-size photo" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Icon name="x" className="h-6 w-6" /></button><img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[92vh] max-w-[94vw] object-contain" /></div>}
  </section>;
}
