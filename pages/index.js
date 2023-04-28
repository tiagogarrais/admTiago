import { useSession, signIn } from 'next-auth/react'
import BotaoPadrao from '../components/BotaoPadrao'
import Contador from '../components/contador-regressivo/Contador'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="conteudo">

        {sessionStorage.setItem('email', session.user.email)}

        <div className="sistemas">
          <h2>Sistemas desenvolvidos para a UFCA</h2>
          <h3>Limpeza do campus Brejo Santo</h3>
          <BotaoPadrao
            nome='Frequência de limpeza'
            href='https://ifeadm.16mb.com/relatoriosadmufca/ifeadm/relatorios/ambientes-ife-frequencia-limpeza.php'
          />
          
          <h3>Outros sistemas</h3>
          <BotaoPadrao
            nome="Brainstorming"
            href="/brainstorming/brainstorming"
          />

          <BotaoPadrao nome="Ambientes IFE" href="/ambientes/0" />

          <BotaoPadrao
            nome="Transportes IFE"
            href="/transportes/"
          />

          <BotaoPadrao
            nome="Processos IFE"
            href="https://processos.ifeadm.16mb.com"
          />

          <BotaoPadrao nome="Site IFE-ADM" href="https://ifeadm.16mb.com" />

          <BotaoPadrao nome="WikiAdm" href="http://raiolaser.16mb.com" />


          <h2>
            Sistemas desenvolvidos para compartilhar conteúdo didático e
            instrucional
          </h2>
          <BotaoPadrao
            nome="Plataforma de cursos"
            href="https://conexaofuturo.com.br"
          />

          <h2>Loja virtual</h2>

          <BotaoPadrao
            nome="Feira Livre Brejo Santo"
            href="https://feiralivrebrejosanto.com.br"
          />

          <h2>Redes Sociais Corporativas</h2>

          <BotaoPadrao
            nome="Loja Stella Maris"
            href="https://instagram.com/comprestellamaris"
          />

          <BotaoPadrao
            nome="Pão da Stella Maris"
            href="https://instagram.com/paodastellamaris"
          />

          <BotaoPadrao
            nome="Site Feira Livre Brejo Santo"
            href="https://facebook.com/feiralivrebrejosanto"
          />

          <h2>Redes Sociais Pessoais</h2>

          <BotaoPadrao
            nome="TikTok"
            href="https://tiktok.com/@tiagoarraisdeholanda"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="conteudo">
      <div id="timer">
        <h2><Contador /></h2>
      </div>
      <p>Aguarde a contagem regressiva, se acabar é necessário fazer login no site.</p>
    </div>
  )
}
