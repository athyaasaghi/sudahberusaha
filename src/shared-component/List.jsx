import React, { Component } from "react";
import { ButtonProps } from "./ButtonComponent";

export default class List extends Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                <ul>
                    {
                        data.map(item => (
                            <li key={item.key}>
                                Nama: {item.name} {item.usia}{" "}
                            </li>

                        ))
                    }
                </ul>
            </div>
        )
    }
}