import React, { useEffect, useRef } from "react";

export default function ScrollToComponent(props: any) {
    const myRef = useRef(null as any);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth"});
    useEffect(() => {
        // Update the document title using the browser API
        // if (props.isScroll) {
            executeScroll();
        // }
    });
    return (
        <div ref={myRef}>
            {props.children}
        </div>

    )
}
