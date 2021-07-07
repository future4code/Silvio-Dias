import React, { useState } from 'react'
import {HeaderArea,Titulo,ButtonHeader} from "./style"

function Header({action}) {
    return (
        <HeaderArea>
            <Titulo onClick = {() => document.location.reload(true)}>Tarot</Titulo>
            <ButtonHeader onClick = {action}>Embaralhar Cartas</ButtonHeader>
        </HeaderArea>
    )
}

export default Header
