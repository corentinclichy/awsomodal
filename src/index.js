import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { Modal } from "./lib";

const App = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };


    const style = {
        content: {

        },
        backdrop: {

        }
    };

    return (
        <div style={{ width: 640, margin: "15px auto" }}>
            <h1>Modaly</h1>
            <button onClick={() => { setIsOpen(true); }} >open modal</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal} hasBackdrop={true} style={style} >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque beatae quia, asperiores eveniet ut, iure voluptas earum quos quo reprehenderit incidunt atque quasi voluptatem enim vel ipsa temporibus debitis odit?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque beatae quia, asperiores eveniet ut, iure voluptas earum quos quo reprehenderit incidunt atque quasi voluptatem enim vel ipsa temporibus debitis odit?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque beatae quia, asperiores eveniet ut, iure voluptas earum quos quo reprehenderit incidunt atque quasi voluptatem enim vel ipsa temporibus debitis odit?</p>
            </Modal>
        </div>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);

