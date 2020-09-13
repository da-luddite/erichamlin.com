import React from "react";
import Lightbox from "react-spring-lightbox";
import { ArrowButton, Header, Footer } from "./components";

/**
 * Double click + pinch to zoom
 * Keyboard Left/Right + swipe to page
 * Keyboard Esc to close
 *
 * @see https://github.com/tim-soft/react-spring-lightbox
 * @see https://timellenberger.com
 */
const EricLightbox = ({
  images,
  currentImageIndex,
  setCurrentIndex,
  isOpen,
  onClose,
  project,
  title,
  description
}) => {
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      onClose={onClose}
      images={images}
      currentIndex={currentImageIndex}
      renderFooter={() => <Footer text={images[currentImageIndex] ? images[currentImageIndex].caption : ''}/>}
      renderHeader={() => (
        <Header
          project={project}
          title={title}
          images={images}
          currentIndex={currentImageIndex}
          onClose={onClose}
          description={description}
        />
      )}
      renderPrevButton={({ canPrev }) => (
        <ArrowButton position="left" onClick={gotoPrevious} disabled={!canPrev} />
      )}
      renderNextButton={({ canNext }) => (
        <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
      )}
    />
  );
};

export default EricLightbox;
