import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }) {
  if (typeof document === 'undefined') return null;
  return createPortal(children, document.body);
}
