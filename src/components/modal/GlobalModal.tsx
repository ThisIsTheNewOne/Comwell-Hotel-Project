import type React from "react";
import { useState, createContext, useCallback, useContext } from "react";
import CreateModal from './CreateModal'; // Import CreateModal

interface GlobalModal2ContextValue {
  showModal: (modalType: any, modalProps?: any) => void;
  hideModal: () => void;
}

export const MODAL_TYPES = {
  CREATE_MODAL: "CREATE_MODAL",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
};

interface GlobalModalContextProviderProps {
  children: React.ReactNode;
}

const GlobalModalContext = createContext<GlobalModal2ContextValue | undefined>(undefined);

export const GlobalModalProvider: React.FC<GlobalModalContextProviderProps> = (
  props: GlobalModalContextProviderProps,
) => {
  const [store, setStore] = useState({ modalType: null, modalProps: {} }); // Define initial state
  const { modalType, modalProps }: any = store ?? {};

  const showModal = useCallback(
    (modalType: string, modalProps: any = {}): any => {
      const newStore = {
        ...(store as any),
        modalType,
        modalProps,
      };
      setStore(newStore);
      return newStore;
    },
    [store],
  );
  const hideModal = (): any => {
    setStore({
      ...(store as any),
      modalType: null,
      modalProps: {
        ...modalProps,
        isFinished: true,
      },
    });
    return modalProps;
  };
  const renderComponent = (): JSX.Element | null => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (modalType === null || ModalComponent === undefined) {
      return null;
    }
    const ModalComponentModified: React.ComponentType<any> = ModalComponent;
    return <ModalComponentModified id="global-modal" modalProps={modalProps} title={""} confirmBtn={""} />;
  };

  return (
    <GlobalModalContext.Provider
      value={{
        showModal,
        hideModal,
      }}
    >
      {renderComponent()}
      {props.children}
    </GlobalModalContext.Provider>
  );
};

function useGlobalModal(): GlobalModal2ContextValue {
  const context = useContext(GlobalModalContext);
  if (context === undefined) {
    throw new Error("context must be used within a CountProvider");
  }
  return context;
}

export { useGlobalModal as useGlobalModal2 };