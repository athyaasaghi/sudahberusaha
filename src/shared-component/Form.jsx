import React from "react";

export default function Form(props) {
    return (
        <React.Fragment>
            {props.children.map(child => {
                if (child.type === "label") {
                    return <Label nama={child.props.children} />
                } else {
                    return child;
                }
            })}
        </React.Fragment>
    );
}

function Label(props) {
    let style = {
        color: "gray",
        fontSize: "11pt"
    }
    return(
        <div>
            <Label style={style}>{props.nama}</Label>
        </div>
    )
}