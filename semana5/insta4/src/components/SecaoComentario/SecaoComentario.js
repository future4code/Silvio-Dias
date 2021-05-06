import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    padding: 5px;
`

const InputContainer = styled.div`
	display: flex;
    justify-content: center;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const EspacoComentario = styled.div`
	display: flex;
	flex-direction:column;
`

export class SecaoComentario extends Component {
	state = {
		comentarioPost: [],
		comentario: ""
	}
	
	onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	aoEnviar = () => {
		alert('Oi')
		const novoComentario = this.state.comentario 

		this.setState({
			comentarioPost: [...this.state.comentarioPost,novoComentario] //ENvia comentário para array comentarioPost
		})

	}

	render() {

		const comentariosArea = this.state.comentarioPost.map(() =>{ //Imprimi Array
			return(
				<EspacoComentario>
					<p>{this.state.comentarioPost}</p><br/> 
				</EspacoComentario>

			)
	
		});
	
		return 	<CommentContainer>
			<InputContainer>
				<InputComentario
					placeholder={'Comentário'}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.aoEnviar}>Enviar</button>
				</InputContainer>
			{comentariosArea}
		</CommentContainer>
	}
}
