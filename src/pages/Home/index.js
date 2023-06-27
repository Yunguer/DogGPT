
import './Style.css';
import localStorage from 'local-storage';

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import { useNavigate } from 'react-router-dom';
import ButtonLoggout from '../../components/ButtonLoggout';
import useAuth from '../../hooks/useAuth';
import UserImage from '../../components/UserImage';
import MessageList from "../../components/MessageList";
import Examples from '../../components/Examples';
import HistoricList from '../../components/HistoricList';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4YWpvenZmYXJxcGVrbnhwcW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NDAxNjksImV4cCI6MjAwMDQxNjE2OX0.1S4_cSS2chgNR7MtTPNhAR5NEgsDS_-Z3Ht86brKJQo';
const SUPABASE_URL = 'https://pxajozvfarqpeknxpqmt.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Home({ user }) {
  //Função para deslogar
  const { signout } = useAuth();
  const navigate = useNavigate();
  // hook para lidar com a mensagem do usuário
  const [mensagem, setMensagem] = useState('');
  const [buttonVisible, setButtonVisible] = useState("button-logout_hidden");
  const [idChat, setIdChat] = useState(-1);
  const [listaChats, setListaChats] = useState([]);
  
  useEffect(() => {
      supabaseClient
        .from('chat')
        .select("*")
        .eq('usuario',user.id)
        .then(({data}) => {
          const listaHist = [];
          data.forEach((chat) => {
            const historico = {"id": chat.id,
                                "pergunta": chat.questao[0].substring(0, 10)+" ..."}
            listaHist.push(historico) 
          })
          setListaChats(listaHist);
        });
  }, [])

  // função para mandar a mensagem para o banco 
  async function handleNovaMensagem(novaMensagem) {

    console.log(novaMensagem);

    novaMensagem = "{" + novaMensagem + "}";
    const mensagem = {
      //id: 1,
      questao: novaMensagem,
      resposta: "{ }",
      usuario: user.id
    };

    const { error } = await supabaseClient
      .from('chat')
      .insert(mensagem)

    if (error == null) {
      console.log("Enviado");
    } else {
      console.log(error);
    }

    setMensagem('');
  }

  console.log(user.foto_url);

  return (
    <body>
      <div className="main-page">

        <div className="nav">
          <nav style={{"height":"80%"}}>
            <button className="new-chat-button" onClick={() => {setIdChat(-1)}}>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              New Chat</button>
              <Historico listaChats={listaChats}></Historico>
            <div className={buttonVisible}>
              <ButtonLoggout Text="Loggout" onClick={() => [signout(), navigate("/")]}>Loggout</ButtonLoggout>
            </div>
            <div className="area-account" onClick={() => {
              if (buttonVisible === "button-logout_hidden") {
                setButtonVisible("button-logout_visible");
              } else {
                setButtonVisible("button-logout_hidden");
              }
            }}>
              <button className="account-button" >

                <div className="account-settings">
                  <UserImage src={user.foto_url} />
                  
                  <div className='account-username'>{user.nome}</div>
                  <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 flex-shrink-0 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
              </button>
            </div>
          </nav>
        </div>

        <div className="main-content">

          <Content id={idChat} listaChat={[]}></Content>


          <div className='text-div'>
            <div className='text-box'>
              <form>
                <textarea value={mensagem}
                  onChange={(event) => {
                    const valor = event.target.value;
                    setMensagem(valor);
                    console.log(valor);
                  }}
                  onKeyUp={(event) => {
                    if (event.key === 'Enter' && event.shiftKey === false) {
                      event.preventDefault();
                      handleNovaMensagem(mensagem);
                    }
                  }}
                  className='text-area'
                  placeholder="Ask a Question" name='Mensagem' id="user-messagr"></textarea>
              </form>
              <div className="send-button">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </div>
            </div>
            <span className='span_bottom'>
              Free Research Preview. ChatGPT may produce inaccurate
              information about people, places, or facts. ChatGPT Mar 23
              Version
            </span>
          </div>
        </div>
      </div>
    </body>
  );
}

/* 
function MontaLista({chat}) {
  const questoes = data[0].questao;
  const respostas = data[0].resposta;
  const merged = [];
  for(var i = 0; i <questoes.length; i++) {
    merged.push({ pergunta:questoes[i], resposta:respostas[i]})
  }
  setListaChat(merged);
}
*/

function Content({id, listaChats}) {
  
  if(id === -1 ) {
    return (
      <Examples></Examples>
    )
  }else{
    return(
      <MessageList lista={[]}></MessageList>
    )
  }
  
}

function Historico({listaChats}) {
  
  if(listaChats.length >0) {
    return(
      <HistoricList historico={listaChats}></HistoricList>
    )
  }
}

export default Home;
