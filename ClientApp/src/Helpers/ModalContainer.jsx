import { observer } from 'mobx-react';
import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useStore } from './loginhelper';

export default observer(function ModalContainer(){
    const {modalStore} = useStore();
    return(
        <Modal open={modalStore.modal.openval} onClose={modalStore.closeModal} size='mini'>
            <Modal.Content>
                {modalStore.modal.body}
            </Modal.Content>

        </Modal>
    )
}
)