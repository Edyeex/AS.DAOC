import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contato.css';

function SobrePage() {
    const navigate = useNavigate(); // Definindo a constante navigate para navegação

    return (
        <div>
            <button onClick={() => navigate("/home")} className="home-button">Home</button> {/* Botão para voltar para Home */}
            <div className="cards-container">
                <div className="card">
                    <img src="https://tse4.mm.bing.net/th?id=OIG4.dilOAg0b0Qs11lBX_nSV&pid=ImgGn" alt="João Silva" />
                    <h2>Igor Witt da Rocha</h2>
                    <p>Telefone: (51) 91234-5678</p>
                    <p>Email: igor.witt@example.com</p>
                </div>
                <div className="card">
                    <img src="https://tse3.mm.bing.net/th?id=OIG2.Md2_29zvz1Wzw5MnzwGC&pid=ImgGn" alt="Maria Oliveira" />
                    <h2>Eder Casagranda</h2>
                    <p>Telefone: (51) 92345-6789</p>
                    <p>Email: eder.casag@example.com</p>
                </div>
            </div>
        </div>
    );
}

export default SobrePage;





       



