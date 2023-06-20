import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import minivan from '/public/images/transportes/minivan-spin.jpg'
import onibus from '/public/images/transportes/onibus-urbano.jpg'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function SolicitarVeiculo() {
  const [solicita, setSolicita] = useState({
    saidaAbaiara: 'Não',
    saidaCentro: 'Não',
    saidaIfe: 'Não',
    objetivo1: 'Não marcado',
    objetivo2: 'Não marcado',
    objetivo3: 'Não marcado',
    objetivo4: 'Não marcado',
    objetivo5: 'Não marcado',
    objetivo6: 'Não marcado',
    objetivo7: 'Não marcado',
    uf: 'Ceará'
  })

  const { data: session } = useSession()
  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')
  const [cpfCadastrado, setCpfCadastrado] = useState('Carregando...')
  const router = useRouter()

  React.useEffect(() => {
    buscarCadastro()
  }, [])

  function onInputChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }))
  }

  function onCheckboxChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.checked === true ? 'Sim' : 'Não'
    }))
  }

  function onObjetivoChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.id]:
        evt.target.checked === true ? evt.target.value : 'Não marcado'
    }))
  }

  function addSolicitanteListaPassag(evt) {
    setSolicita(prevState => ({
      ...prevState,
      passageiro1: nomeCadastrado,
      identificacao1: cpfCadastrado
    }))
  }

  function removeSolicitanteListaPassag(evt) {
    setSolicita(prevState => ({
      ...prevState,
      passageiro1: '',
      identificacao1: ''
    }))
  }

  function preencherDataRetorno(evt) {
    if (document.getElementById('retorno').checked === true) {
      setSolicita(prevState => ({
        ...prevState,
        diaRetorno: solicita.diaIda,
        mesRetorno: solicita.mesIda,
        anoRetorno: solicita.anoIda
      }))
    } else {
      setSolicita(prevState => ({
        ...prevState,
        diaRetorno: '',
        mesRetorno: '',
        anoRetorno: ''
      }))
    }
  }

  function btnSaveClick() {
    event.preventDefault()
    document.getElementById('btnSave').disabled = true
    document.getElementById('btnSave').innerText = 'Aguarde...'

    axios
      .post('/api/transportes/transportes', {
        dataSolicitacao: Date(),
        nome: solicita.nome,
        email: solicita.email,
        telefone: solicita.telefone,
        veiculo: solicita.veiculo,
        solicitanteVai: solicita.solicitanteVai,
        uf: solicita.uf,
        cidade: solicita.cidade,
        dataIda: new Date(
          solicita.anoIda,
          solicita.mesIda - 1,
          solicita.diaIda,
          solicita.horaIda,
          solicita.minutoIda,
          0,
          0
        ),
        dataRetorno: new Date(
          solicita.anoRetorno,
          solicita.mesRetorno - 1,
          solicita.diaRetorno,
          solicita.horaRetorno,
          solicita.minutoRetorno,
          0,
          0
        ),
        saidaIfe: solicita.saidaIfe,
        saidaCentro: solicita.saidaCentro,
        saidaAbaiara: solicita.saidaAbaiara,
        objetivo1: solicita.objetivo1,
        objetivo2: solicita.objetivo2,
        objetivo3: solicita.objetivo3,
        objetivo4: solicita.objetivo4,
        objetivo5: solicita.objetivo5,
        objetivo6: solicita.objetivo6,
        objetivo7: solicita.objetivo7,
        tipo: solicita.tipo,
        setor: solicita.setor,
        passageiro1: solicita.passageiro1,
        identificacao1: solicita.identificacao1,
        passageiro2: solicita.passageiro2,
        identificacao2: solicita.identificacao2,
        passageiro3: solicita.passageiro3,
        identificacao3: solicita.identificacao3,
        passageiro4: solicita.passageiro4,
        identificacao4: solicita.identificacao4,
        passageiro5: solicita.passageiro5,
        identificacao5: solicita.identificacao5,
        passageiro6: solicita.passageiro6,
        identificacao6: solicita.identificacao6,
        passageiro7: solicita.passageiro7,
        identificacao7: solicita.identificacao7,
        passageiro8: solicita.passageiro8,
        identificacao8: solicita.identificacao8,
        passageiro9: solicita.passageiro9,
        identificacao9: solicita.identificacao9,
        passageiro10: solicita.passageiro10,
        identificacao10: solicita.identificacao10,
        passageiro11: solicita.passageiro11,
        identificacao11: solicita.identificacao11,
        passageiro12: solicita.passageiro12,
        identificacao12: solicita.identificacao12,
        passageiro13: solicita.passageiro13,
        identificacao13: solicita.identificacao13,
        passageiro14: solicita.passageiro14,
        identificacao14: solicita.identificacao14,
        passageiro15: solicita.passageiro15,
        identificacao15: solicita.identificacao15,
        passageiro16: solicita.passageiro16,
        identificacao16: solicita.identificacao16,
        passageiro17: solicita.passageiro17,
        identificacao17: solicita.identificacao17,
        passageiro18: solicita.passageiro18,
        identificacao18: solicita.identificacao18,
        passageiro19: solicita.passageiro19,
        identificacao19: solicita.identificacao19,
        passageiro20: solicita.passageiro20,
        identificacao20: solicita.identificacao20,
        passageiro21: solicita.passageiro21,
        identificacao21: solicita.identificacao21,
        passageiro22: solicita.passageiro22,
        identificacao22: solicita.identificacao22,
        passageiro23: solicita.passageiro23,
        identificacao23: solicita.identificacao23,
        passageiro24: solicita.passageiro24,
        identificacao24: solicita.identificacao24,
        passageiro25: solicita.passageiro25,
        identificacao25: solicita.identificacao25,
        passageiro26: solicita.passageiro26,
        identificacao26: solicita.identificacao26,
        passageiro27: solicita.passageiro27,
        identificacao27: solicita.identificacao27,
        passageiro28: solicita.passageiro28,
        identificacao28: solicita.identificacao28,
        passageiro29: solicita.passageiro29,
        identificacao29: solicita.identificacao29,
        passageiro30: solicita.passageiro30,
        identificacao30: solicita.identificacao31,
        passageiro31: solicita.passageiro31,
        identificacao31: solicita.identificacao31,
        passageiro32: solicita.passageiro32,
        identificacao32: solicita.identificacao32,
        passageiro33: solicita.passageiro33,
        identificacao33: solicita.identificacao33,
        passageiro34: solicita.passageiro34,
        identificacao34: solicita.identificacao34,
        passageiro35: solicita.passageiro35,
        identificacao35: solicita.identificacao35,
        passageiro36: solicita.passageiro36,
        identificacao36: solicita.identificacao36,
        passageiro37: solicita.passageiro37,
        identificacao37: solicita.identificacao37,
        passageiro38: solicita.passageiro38,
        identificacao38: solicita.identificacao38,
        passageiro39: solicita.passageiro39,
        identificacao39: solicita.identificacao39,
        passageiro40: solicita.passageiro40,
        identificacao40: solicita.identificacao40,
        passageiro41: solicita.passageiro41,
        identificacao41: solicita.identificacao41,
        passageiro42: solicita.passageiro42,
        identificacao42: solicita.identificacao42,
        passageiro43: solicita.passageiro43,
        identificacao43: solicita.identificacao43,
        passageiro44: solicita.passageiro44,
        identificacao44: solicita.identificacao44
      })
      .then(function (res) {
        setSolicita({})
        document.getElementById('btnSave').disabled = false
        document.getElementById('btnSave').innerText = 'Salvar'
      })
      .catch(function (error) {
        console.log(error)
      })

    axios
      .post('/api/email/enviar', {
        email: solicita.email,
        subject: 'Transportes IFE - Recebemos sua solicitação',
        message: solicita.veiculo
      })
      .then(function (res) {
        window.alert('Enviamos uma cópia desta solicitação no seu email')
        router.push('/transportes/')
      })
  }

  async function buscarCadastro() {
    const response = await fetch(
      '../api/cadastro/cadastro?' + 'email=' + session.user.email
    )
    const data = await response.json()

    if (data === null) {
      setNomeCadastrado('Não cadastrado')
      setTelefoneCadastrado('Não cadastrado')
      setEmailCadastrado('Não cadastrado')
      setCpfCadastrado('Não cadastrado')
      window.alert(
        'Para solicitar transporte é necessário atualizar o seu cadastro.'
      )
      router.push('/cadastro/atualizar')
      return
    }

    setNomeCadastrado(data.nome)
    setTelefoneCadastrado(data.telefone)
    setEmailCadastrado(data.email)
    setCpfCadastrado(data.cpf)
  }

  if (session) {
    solicita.email = session.user.email
    nomeCadastrado ? (solicita.nome = nomeCadastrado) : ''
    telefoneCadastrado ? (solicita.telefone = telefoneCadastrado) : ''
    solicita.veiculo ? '' : (solicita.veiculo = 'Minivan')
    return (
      <div>
        <form onSubmit={btnSaveClick}>
          <div>
            <h2>Requisitar Transporte</h2>
            <p>
              Seu nome é <strong>{nomeCadastrado}</strong>. Todas as
              confirmações e respostas referentes a esta solicitação serão
              enviadas no e-mail <strong>{emailCadastrado}</strong>. O Telefone
              para contato é <strong>{telefoneCadastrado}</strong>.
            </p>
            <div className="button">
              <Link href="/cadastro/atualizar">Atualizar cadastro</Link>
            </div>
            <h4>Qual o veículo que melhor atende sua demanda??</h4>
            <div>
              <label>
                <input
                  type="radio"
                  name="veiculo"
                  id="minivan"
                  value="Minivan"
                  onChange={onInputChange}
                  required
                ></input>
                <Image src={minivan} width={150} height={150} alt="Minivan" />
                Até 6 passageiros + 1 motorista
              </label>

              <label>
                <input
                  type="radio"
                  name="veiculo"
                  id="onibus"
                  value="Ônibus"
                  onChange={onInputChange}
                  required
                ></input>
                <Image src={onibus} width={150} height={150} alt="Minivan" />
                Até 44 passageiros + 1 motorista
              </label>
            </div>
            <h4>Qual o tipo da solicitação?</h4>
            <label htmlFor="com-motorista">
              <input
                type="radio"
                name="tipo"
                id="com-motorista"
                value="Veículo com motorista"
                required
                onChange={onInputChange}
              />
              Veículo com motorista
            </label>
            <label htmlFor="sem-motorista">
              <input
                type="radio"
                name="tipo"
                id="sem-motorista"
                value="Veículo sem motorista"
                onChange={onInputChange}
              />
              Veículo sem motorista (É necessário apresentar Portaria
              autorizando a condução para a retirada do veículo)
            </label>
            <h4>{solicita.nome}, você também vai no veículo?</h4>
            <div>
              <label>
                <input
                  type="radio"
                  name="solicitanteVai"
                  value="Sim"
                  required
                  onChange={onInputChange}
                  onClickCapture={addSolicitanteListaPassag}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="solicitanteVai"
                  value="Não"
                  onChange={onInputChange}
                  onClickCapture={removeSolicitanteListaPassag}
                />
                Não
              </label>
            </div>
            <h4>Sobre a viagem</h4>
            <label>
              Qual a UF de destino?
              <select id="estado" onChange={onInputChange} name="uf" required>
                <option name="estado" value="Ceará" id="ceara" selected>
                  Ceará
                </option>
                <option name="estado" value="Alagoas" id="alagoas">
                  Alagoas
                </option>
                <option name="estado" value="Bahia" id="bahia">
                  Bahia
                </option>
                <option name="estado" value="Maranhão" id="maranhao">
                  Maranhão
                </option>
                <option name="estado" value="Paraíba" id="paraiba">
                  Paraíba
                </option>
                <option name="estado" value="Pernambuco" id="pernambuco">
                  Pernambuco
                </option>
                <option name="estado" value="Piauí" id="piaui">
                  Piauí
                </option>
                <option
                  name="estado"
                  value="Rio Grande do Norte"
                  id="rio-grande-do-norte"
                >
                  Rio Grande do Norte
                </option>
                <option name="estado" value="Sergipe" id="sergipe">
                  Sergipe
                </option>
              </select>
            </label>
            <label>
              Qual a cidade destino?
              <input
                type="text"
                id="cidade"
                name="cidade"
                required
                onChange={onInputChange}
                value={solicita.cidade}
              ></input>
            </label>
            <h5>Data da viagem</h5>
            <div className="datas">
              <label>
                <input
                  size={5}
                  type="number"
                  placeholder="DD"
                  min={1}
                  max={31}
                  name="diaIda"
                  id="diaIda"
                  onChange={onInputChange}
                  value={solicita.diaIda}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  placeholder="MM"
                  min={1}
                  max={12}
                  name="mesIda"
                  id="mesIda"
                  onChange={onInputChange}
                  value={solicita.mesIda}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  min={2023}
                  placeholder="AAAA"
                  name="anoIda"
                  id="anoIda"
                  onChange={onInputChange}
                  value={solicita.anoIda}
                  required
                />
              </label>
            </div>
            <div className="datas">
              Hora da saída
              <label>
                <input
                  size={5}
                  type="number"
                  name="horaIda"
                  placeholder="HH"
                  min={0}
                  max={23}
                  id="horaIda"
                  onChange={onInputChange}
                  value={solicita.horaIda}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  name="minutoIda"
                  placeholder="MM"
                  id="minutoIda"
                  min={0}
                  max={59}
                  onChange={onInputChange}
                  value={solicita.minutoIda}
                  required
                />
              </label>
            </div>
            <label>
              <input
                type="checkbox"
                name="retorno"
                id="retorno"
                onChange={preencherDataRetorno}
              />
              O retorno será no mesmo dia?
            </label>
            <h5>Data do retorno</h5>
            <div className="datas">
              <label>
                <input
                  size={5}
                  type="number"
                  placeholder="DD"
                  min={1}
                  max={31}
                  name="diaRetorno"
                  id="diaRetorno"
                  onChange={onInputChange}
                  value={solicita.diaRetorno}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  min={1}
                  max={12}
                  placeholder="MM"
                  name="mesRetorno"
                  id="mesRetorno"
                  onChange={onInputChange}
                  value={solicita.mesRetorno}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  placeholder="AAAA"
                  min={2023}
                  name="anoRetorno"
                  id="anoRetorno"
                  onChange={onInputChange}
                  value={solicita.anoRetorno}
                  required
                />
              </label>
            </div>
            <div className="datas">
              Hora do retorno
              <label>
                <input
                  size={5}
                  type="number"
                  name="horaRetorno"
                  placeholder="HH"
                  min={0}
                  max={23}
                  id="horaRetorno"
                  onChange={onInputChange}
                  value={solicita.horaRetorno}
                  required
                />
              </label>
              <label>
                <input
                  size={5}
                  type="number"
                  name="minutoRetorno"
                  placeholder="MM"
                  id="minutoRetorno"
                  min={0}
                  max={59}
                  onChange={onInputChange}
                  value={solicita.minutoRetorno}
                  required
                />
              </label>
            </div>
            <h4>Local de saída</h4>
            <label>
              <input
                type="checkbox"
                name="localSaida1"
                id="saidaIfe"
                value="Prédio Sede do IFE"
                onChange={onCheckboxChange}
                autoComplete="off"
              />
              Prédio Sede do IFE, Bairro Centro.
            </label>
            <label>
              <input
                type="checkbox"
                name="localSaida2"
                id="saidaCentro"
                value="Praça Dionísio Rocha de Lucena, Bairro Centro."
                onChange={onCheckboxChange}
                autoComplete="off"
              />
              Praça Dionísio Rocha de Lucena, Bairro Centro.
            </label>
            <label>
              <input
                type="checkbox"
                name="localSaida3"
                id="saidaAbaiara"
                value="Posto Abaiara (quando não houver desvio de trajeto)"
                onChange={onCheckboxChange}
                autoComplete="off"
              />
              Posto Abaiara (quando não houver desvio de trajeto)
            </label>
            <h4>A viagem atenderá algum dos objetivos abaixo relacionados?</h4>
            <p>
              Essas solicitações possuem fluxo de aprovação automática pois
              foram definidas como prioridade pelo Conselho da Unidade
              Acadêmica.
            </p>
            <label htmlFor="objetivo1">
              <input
                type="checkbox"
                name="objetivo1"
                id="objetivo1"
                value="Recebimento de avaliadores do MEC"
                onChange={onObjetivoChange}
              />
              Recebimento de avaliadores do MEC
            </label>
            <label htmlFor="objetivo2">
              <input
                type="checkbox"
                name="objetivo2"
                id="objetivo2"
                value="Reuniões agendadas pelo setor de transportes com os motoristas"
                onChange={onObjetivoChange}
              />
              Reuniões agendadas pelo setor de transportes com os motoristas
            </label>
            <label htmlFor="objetivo3">
              <input
                type="checkbox"
                name="objetivo3"
                id="objetivo3"
                value="Reunião com calendário definido previamente e que envolve representação do IFE"
                onChange={onObjetivoChange}
              />
              Reunião com calendário definido previamente e que envolve
              representação do IFE
            </label>
            <label htmlFor="objetivo4">
              <input
                type="checkbox"
                name="objetivo4"
                id="objetivo4"
                value="Mudança de prédio"
                onChange={onObjetivoChange}
              />
              Mudança de prédio
            </label>
            <label htmlFor="objetivo5">
              <input
                type="checkbox"
                name="objetivo5"
                id="objetivo5"
                value="Eventos de colação de grau"
                onChange={onObjetivoChange}
              />
              Eventos de colação de grau
            </label>
            <label htmlFor="objetivo6">
              <input
                type="checkbox"
                name="objetivo6"
                id="objetivo6"
                value="Montagem de estande na ExpoBrejo"
                onChange={onObjetivoChange}
              />
              Montagem de estande na ExpoBrejo
            </label>
            <label htmlFor="objetivo7">
              <input
                type="checkbox"
                name="objetivo7"
                id="objetivo7"
                value="Revisões dos veículos, quando estas não puderem ser feitas em datas sem agendamentos"
                onChange={onObjetivoChange}
              />
              Revisões dos veículos, quando estas não puderem ser feitas em
              datas sem agendamentos
            </label>
            <h4>
              Esta solicitação vai atender prioritariamente a demanda de qual
              setor ou grupo?
            </h4>
            <label htmlFor="alunos">
              <input
                type="radio"
                name="setor"
                value="Alunos do IFE"
                id="alunos"
                required
                onChange={onInputChange}
              />
              Alunos do IFE
            </label>
            <label htmlFor="assistencia">
              <input
                type="radio"
                name="setor"
                id="assistencia"
                value="Apoio ao discente - IFE"
                onChange={onInputChange}
              />
              Apoio ao discente - IFE
            </label>
            <label htmlFor="direcao">
              <input
                type="radio"
                name="setor"
                id="direcao"
                value="Direção do IFE"
                onChange={onInputChange}
              />
              Direção do IFE
            </label>
            <label htmlFor="biologia">
              <input
                type="radio"
                name="setor"
                id="biologia"
                value="Licenciatura em Biologia"
                onChange={onInputChange}
              />
              Licenciatura em Biologia
            </label>
            <label htmlFor="fisica">
              <input
                type="radio"
                name="setor"
                id="fisica"
                value="Licenciatura em Física"
                onChange={onInputChange}
              />
              Licenciatura em Física
            </label>
            <label htmlFor="matematica">
              <input
                type="radio"
                name="setor"
                id="matematica"
                value="Licenciatura em Matemática"
                onChange={onInputChange}
              />
              Licenciatura em Matemática
            </label>
            <label htmlFor="pedagogia">
              <input
                type="radio"
                name="setor"
                id="pedagogia"
                value="Licenciatura em Pedagogia"
                onChange={onInputChange}
              />
              Licenciatura em Pedagogia
            </label>
            <label htmlFor="quimica">
              <input
                type="radio"
                name="setor"
                id="quimica"
                value="Licenciatura em Química"
                onChange={onInputChange}
              />
              Licenciatura em Química
            </label>
            <label htmlFor="licnm">
              <input
                type="radio"
                name="setor"
                id="licnm"
                value="Licenciatura Interdisciplinar em Ciências Naturais e Matemática"
                onChange={onInputChange}
              />
              Licenciatura Interdisciplinar em Ciências Naturais e Matemática
            </label>
            <h4>Lista de Passageiros</h4>
            {Array.from(
              { length: solicita.veiculo == 'Minivan' ? 6 : 44 },
              (_, i) => (
                <div key={i}>
                  {i + 1}
                  <input
                    type="text"
                    id={`nome-${i + 1}`}
                    name={`passageiro${i + 1}`}
                    placeholder="Nome completo"
                    onChange={onInputChange}
                  />
                  <input
                    type="text"
                    id={`identificacao-${i + 1}`}
                    name={`identificacao${i + 1}`}
                    placeholder="Doc. Ident, CPF, matrícula, SIAPE"
                    onChange={onInputChange}
                  />
                </div>
              )
            )}
          </div>
          <button id="btnSave" type="submit">
            Enviar dados
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
