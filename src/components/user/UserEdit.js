import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export const UserEdit = ({ userId, users, handleClick }) => {
  const filteredUser = users.filter(user => user.id === userId);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} size="sm" color="primary">
        editar
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={""}>
        <ModalHeader toggle={toggle}>Editando Usuário</ModalHeader>
        <ModalBody>
          <Form>
            {filteredUser.map(user => {
              return (
                <div key={user.id}>
                  <FormGroup>
                    <Label for="id">Id</Label>
                    <Input
                      type="text"
                      name="id"
                      id="id"
                      disabled
                      value={user.id}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="nome">nome</Label>
                    <Input
                      type="text"
                      name="nome"
                      id="nome"
                      value={user.fullname}
                    />
                  </FormGroup>
                </div>
              );
            })}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancelar
          </Button>
          <Button color="danger" onClick={handleClick}>
            Apagar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
