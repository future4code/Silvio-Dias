import React from 'react'
import {Background,ModalBody,CardModal,CloseButtonArea,CloseButton} from "./style"
import "./style.css"

function Modal({Choosed,base}) {
    const {imagesUrl} = base

    const choosedList = Choosed.length &&  Choosed.map((choose) => {
        return(
            <CardModal>
                <div>
                    <h3>{choose.name}</h3>
                    <img src = {imagesUrl + choose.image}/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor lectus, convallis fringilla egestas nec,
                     dapibus et turpis. In condimentum tortor in ornare eleifend. Vestibulum vulputate enim nec odio ultrices vestibulum.</p>
            </CardModal>
        )
    })



    return (
        <Background>
            <ModalBody>
                <CloseButtonArea>
                    <CloseButton onClick = {() => document.location.reload(true)}>X</CloseButton>
                </CloseButtonArea>

                {choosedList}

            </ModalBody>
         </Background>
    )
}

export default Modal
