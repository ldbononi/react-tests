import React from "react";
import { NavLink } from "react-router-dom";

const Navegacao = () => {
    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/frontend">Frontend</NavLink>
            </li>
            <li>
                <NavLink exact to="/programacao">Programação</NavLink>
            </li>
            <li>
                <NavLink exact to="/design">Design</NavLink>
            </li>
            <li>
                <NavLink exact to="/catalogo">Catálogo</NavLink>
            </li>
        </ul>
    )
};

export default Navegacao;