import "./ResizableWindow.css";
import { useRef, useEffect, useState } from "react";
import { resizeHandler } from "../Helper/Helper";
import { useResizable } from "./useResizable";

/**
 *
 * Классно, но переделайте
 *
 */
export const ResizableWindow = ({ children }) => {
  const navigatorWindowRef = useRef(null);
  const refRight = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refBottom = useRef(null);

  useResizable();

  useEffect(() => {
    resizeHandler(navigatorWindowRef, refLeft, refTop, refRight, refBottom);
  }, []);

  return (
    <div ref={navigatorWindowRef} className="resizeable">
      <div ref={refLeft} className="resizer resizer-l"></div>
      <div ref={refTop} className="resizer resizer-t"></div>
      {children}
      <div ref={refRight} className="resizer resizer-r"></div>
      <div ref={refBottom} className="resizer resizer-b"></div>
    </div>
  );
};
