import { useCallback, useState } from 'react';

type ModalType = 'createFile' | 'createFolder' | 'deleteConfirm' | 'rename' | null;

// If you know the specific shape of modalProps, define it here.
// For now, we'll use Record<string, unknown> to avoid using `any`.
interface ModalState {
  activeModal: ModalType;
  modalProps: Record<string, unknown>;
}

export const useModalState = () => {
  const [modalState, setModalState] = useState<ModalState>({
    activeModal: null,
    modalProps: {},
  });

  const openModal = useCallback(
    (type: ModalType, props: Record<string, unknown> = {}) => {
      setModalState({ activeModal: type, modalProps: props });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalState({ activeModal: null, modalProps: {} });
  }, []);

  return {
    ...modalState,
    openModal,
    closeModal,
  };
};
