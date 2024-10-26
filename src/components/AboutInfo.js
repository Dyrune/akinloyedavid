import React, { useEffect, useRef, useState } from 'react';
import Footer from "./Footer";
import PanoramaViewer from './PanoramaViewer';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaPlus, FaTimes } from 'react-icons/fa';

const AboutInfo = () => {
  const modalRef = useRef(null);
  const [expandedImage, setExpandedImage] = useState(null); // Modal state
  const [activeWriteup, setActiveWriteup] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Main image in modal

  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Image data with sub-images and descriptions
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fountain Gregtorstore",
      writeup: "Architecture is the art planning, designing, and constructing buildings or other structures.[5] The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief' and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilisations are often identified with their surviving architectural achievements.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1663337284763-0c6e25a2078f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jermacian sherperd",
      writeup: "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.[3] It is both the process and the product of sketching, conceiving,[4] planning, designing, and constructing buildings or other structures.[5] The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief' and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilisations are often identified with their surviving architectural achievements.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fridged Microwaved",
      writeup: "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.[3] It is both the process and the product of sketching, conceiving,[4] planning, designing, and constructing buildings or other structures.[5] The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief' and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilisations are often identified with their surviving architectural achievements.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1648775933902-f633de370964?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Reasereched mosture",
      writeup: "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.[3] It is both the process and the product of sketching, conceiving,[4] planning, designing, and constructing buildings or other structures.[5] The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief' and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilisations are often identified with their surviving architectural achievements.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image One",
      writeup: "This is the description for Image One.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1663337284763-0c6e25a2078f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Two",
      writeup: "This is the description for Image Two.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Three",
      writeup: "This is the description for Image Three.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1648775933902-f633de370964?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Four",
      writeup: "This is the description for Image Four.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image One",
      writeup: "This is the description for Image One.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1663337284763-0c6e25a2078f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Two",
      writeup: "This is the description for Image Two.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Three",
      writeup: "This is the description for Image Three.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1648775933902-f633de370964?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Four",
      writeup: "This is the description for Image Four.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image One",
      writeup: "This is the description for Image One.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1663337284763-0c6e25a2078f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Two",
      writeup: "This is the description for Image Two.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Three",
      writeup: "This is the description for Image Three.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1648775933902-f633de370964?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Four",
      writeup: "This is the description for Image Four.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image One",
      writeup: "This is the description for Image One.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1663337284763-0c6e25a2078f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Two",
      writeup: "This is the description for Image Two.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Three",
      writeup: "This is the description for Image Three.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1648775933902-f633de370964?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Image Four",
      writeup: "This is the description for Image Four.",
      subImages: [
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524902415768-4af4a08e416f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    }
  ];

  // Toggle write-up visibility
  const handleToggleWriteup = (id) => {
    setActiveWriteup(activeWriteup === id ? null : id);
  };

  // Open modal for main image and sub-images
  const openModal = (image) => {
    setSelectedImage(image.src); // Set initial modal image
    setExpandedImage(image.id);
  };

  // Close modal
  const closeModal = () => {
    setExpandedImage(null);
    setSelectedImage(null);
  };

  // Handle thumbnail click in modal
  const handleThumbnailClick = (thumbnailSrc) => {
    setSelectedImage(thumbnailSrc);
  };

  const renderGallery = (imagesSubset) => (
    <div className="image-gallery">
      <div className="scroll-container">
        {imagesSubset.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info">
              <button className="toggle-writeup">
                <div className="frugle"></div>
                {image.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            if (!entry.target.classList.contains("triggered")) {
              const animationClass = entry.target.classList.contains("fade-left-section")
                ? "slideFadeInLeft"
                : "slideFadeIn";
              entry.target.classList.add(animationClass, "triggered");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-section, .fade-left-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div className="about-info-container" ref={modalRef}>
      {/* Fixed Vertical Sidebar */}
      <div className="vertical-sidebar">
        <hr className="vertical-hr" />
        <div className="icon-group">
          <a href="https://instagram.com" className="fade-section" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" className="fade-section" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" className="fade-section" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" className="fade-section" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section fade-section">
        <h1>About Me</h1>
      </div>

      {/* School and Additional Info Section */}
      <div className="school-info-section fade-section">
        <div className="school-column fade-section">
          <p>
            I attended XYZ University, where I pursued a degree in Computer Science. The experience was transformative, shaping my technical skills and critical thinking abilities.
            Whilst the details of this project cannot be disclosed – the ideas generated for this project alongside the final imagery is a set we are honoured to showcase. Narrative stands central with the imagery we produce and an airport setting provides plenty of scope to pair interesting narratives with unique compositions and lighting.
          </p>
        </div>
        <div className="additional-column fade-section">
          <p>Whilst the details of this project cannot be disclosed – the ideas generated for this project alongside the final imagery is a set we are honoured to show
            During my studies, I took part in various projects that developed my problem-solving skills and deepened my passion for technology.
            In addition to academics, I was actively involved in tech clubs, where I gained hands-on experience.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img src="https://images.unsplash.com/photo-1729550772333-9133b2c19d7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Me" className="profile-image" />
      </div>

    {/* ARCHITECTURE Section */}
    <div className="Service fade-left-section">
      <h1>ARCHITECTURE</h1>
    </div>
    <div className="experience-goals-section">
      <div className="school-column fade-section">
        <p>
          I attended XYZ University, where I pursued a degree in Computer Science. The experience was transformative, shaping my technical skills and critical thinking abilities.
          The project ideas and final imagery generated in this area are something we’re proud to showcase. Narrative plays a central role in our architectural imagery, combining unique compositions and lighting.
        </p>
      </div>
      <div className="additional-column fade-section">
        <p>
          Throughout my studies, I engaged in numerous projects that enhanced my problem-solving skills and deepened my passion for technology.
          Alongside academic work, I actively participated in tech clubs, gaining practical experience and building collaborative skills in the field.
        </p>
      </div>
    </div>

    {/* Architecture Image Gallery */}
    <div className="image-gallery">
      <div className="scroll-container">
        {images.slice(0, 4).map((image) => (
          <div key={image.id} className={`gallery-item ${expandedImage === image.id ? 'highlighted' : ''}`}>
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info fade-left-section">
              <button className="toggle-writeup" onClick={() => handleToggleWriteup(image.id)}>
                <div className="frugle"></div>
                {image.name}
              </button>
              {activeWriteup === image.id && <p className="writeup">{image.writeup}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PLANNING Section */}
    <div className="Service fade-left-section">
      <h1>PLANNING</h1>
    </div>
    <div className="experience-goals-section">
      <div className="school-column fade-section">
        <p>
          During my time in the planning field, I worked on various projects that allowed me to understand the importance of detail and foresight in project design.
          Through multiple coding bootcamps, hackathons, and conferences, I was able to enhance my passion for development and strategic planning.
        </p>
      </div>
      <div className="additional-column fade-section">
        <p>
          This work gave me insight into comprehensive project planning, ensuring the smooth execution of ideas while remaining adaptable and collaborative.
          The projects taught me the value of creative problem-solving, shaping my goals in the tech community to create lasting, impactful solutions.
        </p>
      </div>
    </div>

    {/* Planning Image Gallery */}
    <div className="image-gallery">
      <div className="scroll-container">
        {images.slice(4, 8).map((image) => (
          <div key={image.id} className={`gallery-item ${expandedImage === image.id ? 'highlighted' : ''}`}>
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info fade-left-section">
              <button className="toggle-writeup" onClick={() => handleToggleWriteup(image.id)}>
                <div className="frugle"></div>
                {image.name}
              </button>
              {activeWriteup === image.id && <p className="writeup">{image.writeup}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* MASTERPLANNING Section */}
    <div className="Service fade-left-section">
      <h1>MASTERPLANNING</h1>
    </div>
    <div className="experience-goals-section">
      <div className="school-column fade-section">
        <p>
          Masterplanning projects helped me to refine my skills in large-scale project coordination and long-term planning.
          This experience shaped my technical skills and critical thinking abilities, empowering me to work on impactful software that considers both user needs and aesthetic aspects.
        </p>
      </div>
      <div className="additional-column fade-section">
        <p>
          Working on masterplanning was a transformative experience, helping me to merge design with functionality while always keeping the end goal in mind.
          It remains my aspiration to continue innovating, creating accessible software, and fostering a collaborative tech community.
        </p>
      </div>
    </div>

    {/* Masterplanning Image Gallery */}
    <div className="image-gallery">
      <div className="scroll-container">
        {images.slice(8, 12).map((image) => (
          <div key={image.id} className={`gallery-item ${expandedImage === image.id ? 'highlighted' : ''}`}>
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info fade-left-section">
              <button className="toggle-writeup" onClick={() => handleToggleWriteup(image.id)}>
                <div className="frugle"></div>
                {image.name}
              </button>
              {activeWriteup === image.id && <p className="writeup">{image.writeup}</p>}
            </div>
          </div>
        ))}
      </div>
    </div> 
    
    
     {/* EXTERIOR Section */}
    <div className="Service fade-left-section">
      <h1>EXTERIOR</h1>
    </div>
    <div className="experience-goals-section">
      <div className="school-column fade-section">
        <p>
          During my time in the planning field, I worked on various projects that allowed me to understand the importance of detail and foresight in project design.
          Through multiple coding bootcamps, hackathons, and conferences, I was able to enhance my passion for development and strategic planning.
        </p>
      </div>
      <div className="additional-column fade-section">
        <p>
          This work gave me insight into comprehensive project planning, ensuring the smooth execution of ideas while remaining adaptable and collaborative.
          The projects taught me the value of creative problem-solving, shaping my goals in the tech community to create lasting, impactful solutions.
        </p>
      </div>
    </div>

    {/* Exterior Image Gallery */}
    <div className="image-gallery">
      <div className="scroll-container">
        {images.slice(12, 16).map((image) => (
          <div key={image.id} className={`gallery-item ${expandedImage === image.id ? 'highlighted' : ''}`}>
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info fade-left-section">
              <button className="toggle-writeup" onClick={() => handleToggleWriteup(image.id)}>
                <div className="frugle"></div>
                {image.name}
              </button>
              {activeWriteup === image.id && <p className="writeup">{image.writeup}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

   {/* INTERIOR Section */}
   <div className="Service fade-left-section">
      <h1>INTERIOR</h1>
    </div>
    <div className="experience-goals-section">
      <div className="school-column fade-section">
        <p>
          During my time in the planning field, I worked on various projects that allowed me to understand the importance of detail and foresight in project design.
          Through multiple coding bootcamps, hackathons, and conferences, I was able to enhance my passion for development and strategic planning.
        </p>
      </div>
      <div className="additional-column fade-section">
        <p>
          This work gave me insight into comprehensive project planning, ensuring the smooth execution of ideas while remaining adaptable and collaborative.
          The projects taught me the value of creative problem-solving, shaping my goals in the tech community to create lasting, impactful solutions.
        </p>
      </div>
    </div>

    {/* INTERIOR Image Gallery */}
    <div className="image-gallery">
      <div className="scroll-container">
        {images.slice(16, 20).map((image) => (
          <div key={image.id} className={`gallery-item ${expandedImage === image.id ? 'highlighted' : ''}`}>
            <img
              src={image.src}
              alt={image.name}
              onClick={() => openModal(image)}
              className="main-image"
            />
            <div className="image-info fade-left-section">
              <button className="toggle-writeup" onClick={() => handleToggleWriteup(image.id)}>
                <div className="frugle"></div>
                {image.name}
              </button>
              {activeWriteup === image.id && <p className="writeup">{image.writeup}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Modal for Enlarged Image View */}
    {expandedImage && (
      <div className="moddal-overlay" onClick={closeModal}>
        <button className="modal-close" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className="moddal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt="Expanded View" className="expanded-image" />
          <div className="thumbnail-container">
            {images.find((img) => img.id === expandedImage).subImages.map((subImage, index) => (
              <img
                key={index}
                src={subImage}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleThumbnailClick(subImage)}
              />
            ))}
          </div>
        </div>
      </div>
    )}


     < Footer />
    </div>
  );
};

export default AboutInfo;
