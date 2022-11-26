import React from "react";
import "../commons/styles/Styles.css";

export default function Text(props: any) {
    return (
        <div {...props}>{props.children}</div>
    );
}