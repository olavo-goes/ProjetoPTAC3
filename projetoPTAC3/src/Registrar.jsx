import { useState } from "react";
import { auth } from "./Config/firebaseConfig.js"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";


export default function Registra() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword (auth, email, senha);
            navigation('/login')
        } catch (erro){
            alert('Erro ao cadastrar')
        }
    };

    return(
    <>
    <Header header="cabeçalho"/>
    <main>
        <form onSubmit={handleRegister}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Registrar</button>
        </form>
    </main>
    <Footer footer="© Desenvolvido por: Olavo Goes"/>
    </>
    )
}