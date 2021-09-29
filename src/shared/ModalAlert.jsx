import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';

function ModalTemplate(props) {

    return (
        <div>
            <Modal
                className='custom_modal'
                open={props.onOpen}
                onClose={props.onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.onOpen} >
                    <div className='modal_remove_outline'>
                        {props.component()}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalTemplate;