import { AosOptions } from "aos";
import React from "react";
import "./ComponentStyles.css";
import "aos/dist/aos.css"
interface IProps extends  AosOptions {
    children: React.ReactNode;
    dataAosOffset?: number;
}

export default function AnimationCard(props: IProps) {
    const { children } = props;
    return (
        <div {...props}>
            {children}
        </div>
    );
}
