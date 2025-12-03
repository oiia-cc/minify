import MyModal from ".";
import { useModalStore } from "../../stores/modal.store";

export default function GlobalModalManager() {
    const { modalName, closeModal, modalData } = useModalStore();

    if (!modalName) return null;

    switch (modalName) {
        case "editPost":
            return <MyModal modalName={modalName} data={modalData} onClose={closeModal} />;

        case "upload":
            return <MyModal modalName={modalName} data={modalData} onClose={closeModal} />;

        default:
            return null;
    }
}

