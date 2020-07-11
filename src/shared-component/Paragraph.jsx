import React from "react";

export default function Paragraph(props){
    return(
        <React.Fragment>
         <h1>Nama: {props.nama}</h1>
         <h1>Jabatan: {props.jabatan}</h1>
         <p>{props.children}</p>
        </React.Fragment>
    )
}