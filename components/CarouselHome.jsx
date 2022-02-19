import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButtonHome, NextButtonHome } from "./CarouselButtonsHome";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const CarouselHome = ({ carousel, options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 20000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla-home">
      <div className="embla__viewport-home" ref={emblaRef}>
        <div className="embla__container-home">
          {carousel
            .filter((image) => image.fields.carouselHome)
            .map((image) => (
              <div className="embla__slide-home" key={image.sys.id}>
                <div className="embla__slide__img-home">
                  <img
                    src={"https:" + image.fields.carouselHome.fields.file.url}
                    alt="Image d'acceuil"
                  />
                </div>
                {console.log(image.fields.slug)}
                <div className="btn-home" key={image.sys.id}>
                  <button>
                    <Link href={"projets/" + image.fields.slug}>
                      <a>test</a>
                    </Link>
                  </button>
                  <p className="presentation">paragraphe</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <PrevButtonHome onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButtonHome onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default CarouselHome;
