import { useState } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-5">
      <img src={slides[current]} className="w-full h-64 object-cover rounded-lg" alt="Slide" />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 bg-black text-white p-2">←</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 bg-black text-white p-2">→</button>
    </div>
  );
};

export default Carousel;
