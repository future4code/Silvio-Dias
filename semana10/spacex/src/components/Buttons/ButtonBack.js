import Button from "./Button"
import { goToBack } from '../../routes/Cordinator';

export function ButtonBack(props){
    return(
        <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(props.h)}/>
    )
}  
