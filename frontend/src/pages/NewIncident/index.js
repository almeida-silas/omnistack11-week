import React, { useState } from 'react';
import './style.css';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ong_id = localStorage.getItem('ong_id');

    const history = useHistory();

    const handleNewIncident = async event => {

        event.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, { headers: { Authorization: ong_id } });

            alert('Caso criado com sucesso!!');

            history.push('/profile');
        } catch (error) {
            alert('Erro ao criar caso, tente novamente!!');
        };
    };

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className="a-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="título do caso"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};