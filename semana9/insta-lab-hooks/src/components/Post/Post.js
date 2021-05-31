import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [comentando,setComentando] = useState(false)
  const [curtida,setCurtida] = useState(false)
  const [numeroCurtida,setNumeroCurtida] = useState(0)
  const [listaComentarios,setListaComentarios] = useState([])
  const [numeroComentario,setNumeroComentario] = useState(0)

  const onClickCurtida = () => {
    
    if(curtida){
      setCurtida(!curtida)
      setNumeroCurtida(numeroCurtida - 1)
    }else{
      setCurtida(!curtida)
      setNumeroCurtida(numeroCurtida + 1)
    }
  };

  const iconeCurtida = curtida ? iconeCoracaoPreto:iconeCoracaoBranco

  const onClickComentario = () => {
      setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const comentarios = [...listaComentarios,comentario]
    setListaComentarios(comentarios)
    setNumeroComentario(numeroComentario +1)
    setComentando(false)
    

  }

  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    listaComentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtida}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentario}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post