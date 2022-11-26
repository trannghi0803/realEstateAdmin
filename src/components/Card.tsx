import React from "react";
import "./ComponentStyles.css";
interface IProps {
    children: React.ReactNode;
}

export default function Card(props: IProps) {
    const { children } = props;
    return (
        <div {...props} className="card-view w-100">
            {children}
        </div>
    );
}
