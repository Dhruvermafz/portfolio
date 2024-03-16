import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function ImageViewer({ isOpen, onClose, imageUrl }) {
  return isOpen && <Lightbox mainSrc={imageUrl} onCloseRequest={onClose} />;
}

export default ImageViewer;
