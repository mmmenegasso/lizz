import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonialImages = [
  '/dep1.png',
  '/dep2.png',
  '/dep3.png',
  '/dep4.png',
  '/dep5.png',
  '/dep6.png',
  '/dep7.png',
  '/dep8.png',
  '/dep9.png'
];

export default function PainIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const totalSlides = Math.ceil(testimonialImages.length / itemsPerSlide);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Você não está sozinha
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mais de 38 mil pessoas já participaram do Desafio 60 Dias e aprovaram os resultados!
          </p>
        </div>

        <div className="mx-auto mb-16 px-4 sm:px-0 max-w-[337px] sm:max-w-[720px] xl:max-w-[1080px]">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl h-[689px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-3 justify-center">
                    {testimonialImages
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((image, imgIndex) => (
                        <div key={imgIndex} className="w-[337px] flex-shrink-0">
                          <img
                            src={image}
                            alt={`Depoimento ${slideIndex * itemsPerSlide + imgIndex + 1}`}
                            className="w-full h-[689px] object-contain rounded-xl shadow-lg"
                          />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#C62828] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
