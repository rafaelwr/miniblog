import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias!</p>
        <form>
            <label>
                <span>Nome:</span>
                <input 
                    type="text"
                    name="displayName"
                    required
                    placeholder="Nome do usuário"
                />
            </label>
            <label>
                <span>E-Mail:</span>
                <input 
                    type="email"
                    name="email"
                    required
                    placeholder="E-Mail do usuário"
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type="password"
                    name="password"
                    required
                    placeholder="Senha do usuário"
                />
            </label>
            <label>
                <span>Confirme a Senha:</span>
                <input 
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Confirme sua senha"
                />
            </label>
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register