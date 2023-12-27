import type React from "react";
import { Modal, ModalVariant, Button } from "@patternfly/react-core";
// import XIcon from "./icons/X.svg";
import { useCallback, useState } from "react";
import { useGlobalModal2 } from "./GlobalModal";



const CreateModal: React.FC = () => {
  const { hideModal } = useGlobalModal2();


  const [newAudienceName, setNewAudienceName] = useState("");
  const handleModalToggle = useCallback(() => {
    hideModal();
  }, [hideModal]);

 

  return (
    <Modal
      variant={ModalVariant.medium}
      isOpen={true}
      onClose={handleModalToggle}
      actions={[]}
      className="modalContainer"
      aria-label="Update Modal"
    >
     
        <div className="Exist_Module" onClick={handleModalToggle}>
          {/* <img src={XIcon} alt="" /> */}
        </div>

        <div className="Header_Modal">
          <h3>Write your Audience Name</h3>
        </div>
        <div>
          <div>
            <div className="emailLabel"> Audience Name</div>
            <input
              className="input_Internal"
              type={"text"}
              value={newAudienceName}
              onChange={(event) => {
                setNewAudienceName(event.target.value);
              }}
              placeholder={"Audience Example"}
              id="email"
            />
          </div>
        </div>

        <div className="Buttons_Modal" id="Buttons_Modal">
          <Button> Confirm</Button>
        </div>
    </Modal>
  );
};


export default CreateModal;