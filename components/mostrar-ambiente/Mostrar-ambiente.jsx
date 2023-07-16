import { useRouter } from 'next/router'
import { useQRCode } from 'next-qrcode'

export function MostrarAmbiente() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiSala = '../api/ambientes/' + ambiente
  const { Canvas } = useQRCode()
  const linkDestaPagina = 'https://admtiago.com.br/ambientes/' + ambiente

  fetch(linkApiSala)
    .then(function (dadosBrutos) {
      return dadosBrutos.json()
    })
    .then(function (dadosJson) {
      if (dadosJson.nomeAmbiente != null) {
        document.getElementById('nomeAmbiente').innerText =
          dadosJson.nomeAmbiente
      }

      if (dadosJson.frequenciaSemanalLimpeza != null) {
        document.getElementById('frequenciaSemanalLimpeza').innerText =
          dadosJson.frequenciaSemanalLimpeza
      }
      if (dadosJson.tipo != null) {
        document.getElementById('tipo').innerText = dadosJson.tipo
      }
      if (dadosJson.larguraLesteOeste != null) {
        document.getElementById('largura').innerText =
          dadosJson.larguraLesteOeste
      }
      if (dadosJson.comprimento != null) {
        document.getElementById('comprimento').innerText = dadosJson.comprimento
      }

      document.getElementById('areaM2').innerText = (
        dadosJson.larguraLesteOeste * dadosJson.comprimento
      ).toFixed(1)
    })
    .catch(function (e) {
      console.log('Erro capturado, consulte o código para mais informações')
    })

  return (
    <div>
      <h2 id="nomeAmbiente"></h2>
      <p>Chave número: {ambiente}</p>
      <p>
        A limpeza completa deste ambiente é executada{' '}
        <span id="frequenciaSemanalLimpeza"></span> vez(s) por semana.
      </p>
      <p>
        Tipo de ambiente: <span id="tipo"></span>
      </p>

      <p>
        Largura em metros: <span id="largura"></span>
      </p>

      <p>
        Comprimento: <span id="comprimento"></span>
      </p>

      <p>
        Área em metros quadrados: <span id="areaM2"></span>
      </p>
      <p>Link desta página: {linkDestaPagina}</p>
      <div className="center">
        <Canvas
          text={linkDestaPagina}
          options={{
            level: 'M',
            margin: 3,
            scale: 4,
            width: 200
          }}
        />
      </div>
    </div>
  )
}
