import { makeAutoObservable } from "mobx"

export default class ModalStore{
    modal = {
        openval : false,
        body : []
    }

    constructor(){
        makeAutoObservable(this);
    }

    openModal = (content) => {
        console.log("Heer");
        this.modal.openval = true;
        this.modal.body = content;
    }

    closeModal = () => {
        this.modal.openval = false;
        this.modal.body= null;
    }
}