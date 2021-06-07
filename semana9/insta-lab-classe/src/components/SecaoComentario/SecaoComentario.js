import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario(props){


	const [valorInput,setvalorInput] = useState("");
	
 	const onChangeComentario = (event) => {
		setvalorInput(event.target.value)
	 }

		return <CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={valorInput}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {props.enviarComentario(valorInput)}}>Enviar</button>
		</CommentContainer>
	}


export default SecaoComentario