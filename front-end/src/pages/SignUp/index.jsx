import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import ThemeDefault from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { Container, Form, Logo } from "./styles"


export const SignUp = () => {

  const [loading, setLoading] = useState(false)

  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyles />
      <Container >
        <Logo>
          <div className="logo">
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C" />
            </svg>
            <h1>Food Explorer</h1>
          </div>
        </Logo>

        <Form>

          <h2>Crie sua conta</h2>

          <div className="input">
            <p>Seu nome</p>
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
            // onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <p>Email</p>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
            // onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <p>Senha</p>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
            // onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button
            title={loading ? "Cadastrando" : "Criar conta"}
            // onClick={handleSignUp}
            disabled={loading}
          />

          <Link className="link" to="/">
            {/* // onClick={handleBack}> */}
            Já tenho uma conta
          </Link>

        </Form>
      </Container >
    </ThemeProvider >
  )
}