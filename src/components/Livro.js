import React from "react";
import { useParams } from 'react-router-dom'

const Livro = ({ livros }) => {

    const { livroSlug } = useParams();

    const livro = livros.find(l => l.slug === livroSlug);

    return (
        <main className="principal" >
            <div className="pag-livro">
                <h2>{livro.titulo}</h2>
                <div className="livro">
                    <img src={"/imagens/capas/" + livro.id + ".jpg"} alt="Thumbnail da cada do livro..." />
                </div>
                <ul>
                    <li>ISBN: {livro.isbn}</li>
                    <li>Ano: {livro.ano}</li>
                    <li>Páginas: {livro.paginas}</li>
                    <li>Preço: R$ {livro.preco},00</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>{livro.descricao}</p>
            </div>
        </main>
    )
};

export default Livro;