
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


const latidos= ["Au Au? Au, auau!","Auauaua auaau.", "Au! Auau, au?", "Auaua auau, auauau, auau. 🐩", "WOOF 🐺", "🐶", "Woof Woof? Wooooooof!", "Au Au 🐕"];

function Home({ user }) {
  //Função para deslogar
  const { signout } = useAuth();
  const navigate = useNavigate();
  // hook para lidar com a mensagem do usuário
  const [mensagem, setMensagem] = useState('');
  const [buttonVisible, setButtonVisible] = useState("button-logout_hidden");
  const [idChat, setIdChat] = useState(-1);
  const [listaChats, setListaChats] = useState([]);
  const [listaHist, setListaHist] = useState([]);
  

  function getChats(isNewChat = false) {
    supabaseClient
        .from('chat')
        .select("*")
        .eq('usuario',user.id)
        .then(({data}) => {
          const listaHist = [];
          const listaChats = [];
          data.forEach((chat) => {
            const historico = {"id": chat.id,
                                "pergunta": chat.questao[0].substring(0, 10)+" ..."}
            listaHist.push(historico)
            listaChats.push(chat); 
          })
          setListaChats(listaChats);
          setListaHist(listaHist);

          if(isNewChat) {
            setIdChat(listaHist.length-1);
          }
        });
  }
  useEffect(getChats, [])

  // função para mandar a mensagem para o banco 
  async function handleNovaMensagem(novaMensagem) {
    
    if(idChat === -1) {
  
      novaMensagem = "{" + novaMensagem + "}";
      const rand = (Math.trunc(Math.random()*1000)) % latidos.length;
      const lat = latidos[rand];
      const novaResposta = "{" + lat+ "}";
      
      const mensagem = {
        //id: 1,
        questao: novaMensagem,
        resposta: novaResposta,
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

      getChats(true);
      
    }else{
      const rand = (Math.trunc(Math.random()*1000)) % latidos.length;
      const lat = latidos[rand];
      
      listaChats[idChat].questao.push(novaMensagem);
      listaChats[idChat].resposta.push(lat);
      
      const { error } = await supabaseClient
        .from('chat')
        .update({ questao: listaChats[idChat].questao, resposta: listaChats[idChat].resposta})
        .eq('id', listaChats[idChat].id)

        if(error!=null) {
          console.log(error);
        }
        

    }
  
    setMensagem('');
  }



  return (
    <div>
      <div className="main-page">

        <div className="nav">
          <nav style={{"height":"80%"}}>
            <button className="new-chat-button" onClick={() => {setIdChat(-1)}}>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              New Chat</button>
              <Historico listaChats={listaHist} fun={setIdChat}></Historico>
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
                  <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
              </button>
            </div>
          </nav>
        </div>

        <div className="main-content">

          <Content id={idChat} listaChats={listaChats} image={user.foto_url} fun={setMensagem}></Content>


          <div className='text-div'>
            <div className='text-box'>
              <form>
                <textarea value={mensagem}
                  onChange={(event) => {
                    const valor = event.target.value;
                    setMensagem(valor);
                  }}
                  onKeyUp={(event) => {
                    if (event.key === 'Enter' && event.shiftKey === false) {
                      event.preventDefault();
                      handleNovaMensagem(mensagem);
                    }
                  }}
                  className='text-area'
                  placeholder="Send a Message" name='Mensagem' id="user-messagr"></textarea>
              </form>
              <button className="send-button" onClick={() => {handleNovaMensagem(mensagem)}}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <span className='span_bottom'>
              Este site é uma paródia do ChatGPT, criado para a disciplina
              Programação para Internet, do curso de Ciência da Computação da UFF.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


function MontaLista(id, chat) {
  const questoes = chat[id].questao;
  const respostas = chat[id].resposta;
  const merged = [];
  
  for(var i = 0; i <questoes.length; i++) {
    merged.push({ pergunta:questoes[i], resposta:respostas[i]})
  }
  return merged;
}


function Content({id,  listaChats, image, fun} ) {
  if(id === -1 | listaChats.length === 0) {
    return (
      <Examples fun={fun}></Examples>
    )
  }else{
    
    const lista = MontaLista(id, listaChats);
    return(
      <MessageList lista={lista} image={image}></MessageList>
    )
  }
  
}

function Historico({listaChats, fun}) {
  
  if(listaChats.length >0) {
    return(
      <HistoricList historico={listaChats} fun={fun}></HistoricList>
    )
  }
}

export default Home;
