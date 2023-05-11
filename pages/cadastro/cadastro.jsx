import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import BuscarCadastro from '../../components/cadastro/BuscarCadastro'
import Link from 'next/link'

export default function Cadastro() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Link href="/">Voltar para a página principal</Link>
        <div id="cadastro">
          <BuscarCadastro />
        </div>

        <Link href={'/cadastro/atualizar'}>Atualizar cadastro</Link>
        <Link href="/">Voltar para a página principal</Link>
      </>
    )
  }
  return (
    <>
      <div>
        <p>Para acessar este conteúdo é necessário fazer login</p>
        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </>
  )
}
