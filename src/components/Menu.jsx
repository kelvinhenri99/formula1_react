import React from "react";
import './Menu.css';

const Menu = () => {

    return (
        <div className="menu">
            <ul>
                <a href="#inicio"><li>Início</li></a>
                <a href="#historia"><li>Historia F1</li></a>
                <a href="#equipes"><li>Equipes</li></a>
                <a href="#campeoes"><li>Campeões</li></a>
                <a href="#carros"><li>Carros F1</li></a>
                <a href="#pista"><li>Circuitos</li></a>
                <a href="#opniao"><li>Sua opnião</li></a>
                <a href="#usuarios"><li>Opniões dos usuários</li></a>
            </ul>
        </div>
    )
}

export default Menu;
