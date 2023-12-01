import { NavigatorWindow } from "../NavigatorWindow/NavigatorWindow"
import './ResizableWindow.css'
import { useRef, useEffect } from "react";
import { resizeHandler } from "../Helper/Helper";

export const ResizableWindow = () => {
    const navigatorWindowRef = useRef(null);
    const refRight = useRef(null)
    const refLeft = useRef(null)
    const refTop= useRef(null)
    const refBottom = useRef(null)

    useEffect(() => {
        resizeHandler(navigatorWindowRef, refLeft, refTop, refRight, refBottom)
    }, []);
    return (
        <div className="container">
      <div ref={navigatorWindowRef} className="resizeable">
        <div ref={refLeft} className="resizer resizer-l"></div>
        <div ref={refTop} className="resizer resizer-t"></div>
        <NavigatorWindow/>
        <div ref={refRight} className="resizer resizer-r"></div>
        <div ref={refBottom} className="resizer resizer-b"></div>
      </div>
    </div> 
    )
}