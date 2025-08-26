"use client";

import { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { gsap } from 'gsap';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const BaseModal = ({ isOpen, onClose, title, icon, children }: BaseModalProps) => {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(backdropRef.current, { opacity: 1, duration: 0.2 })
      .to(modalRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.2 }, "-=0.1");

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.set(modalRef.current, { y: -20, scale: 0.95, opacity: 0 });
      gsap.set(backdropRef.current, { opacity: 0 });
      tl.play();
    } else {
      tl.reverse();
      const onReverseComplete = () => {
        document.body.style.overflow = '';
      };
      // GSAP doesn't have a direct onReverseComplete on the timeline itself
      // so we use a delayed call.
      gsap.delayedCall(tl.duration(), onReverseComplete);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !gsap.isTweening(modalRef.current)) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/75 opacity-0"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative bg-white w-full max-w-md rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {icon}
            <h2 id="modal-title" className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
            <FiX size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;