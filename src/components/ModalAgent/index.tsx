import { Modal } from "./ModalAgent"
import { useState } from "react";

type Props = {
    display: string,
}


export const ModalAgent = (props: Props) => {

    const [display, setDisplay] = useState('');

    

    return(
        <Modal style={{ display: `${props.display}` }}>

        </Modal>
    )
}