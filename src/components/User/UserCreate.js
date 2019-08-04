import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Alert
} from "reactstrap";
import * as Yup from "yup";
import { http } from "../../config";

const styles = {
  root: {
    margin: "1rem"
  },
  title: {
    margin: "2rem 0 2rem 0"
  }
};

const UserSchema = Yup.object().shape({
  fullname: Yup.string().required("o campo nome completo é obrigatório"),
  email: Yup.string()
    .email("digite um email válido")
    .required("o campo email é obrigatório"),
  telephone: Yup.string().required("o campo telefone é obrigatório"),
  cellphone: Yup.string().required("o campo celular é obrigatório")
});

const customInputForm = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Input
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <FormFeedback>{errors[field.name]}</FormFeedback>
    )}
  </div>
);

export const UserCreate = () => {
  const [userAlert, setUserAlert] = useState(false);
  const onShowAlert = () => {
    setUserAlert(true);
    setTimeout(() => {
      setUserAlert(false);
    }, 3000);
  };
  return (
    <div style={styles.root}>
      <h5 style={styles.title}>Cadastrar usuário (Formik)</h5>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          telephone: "",
          cellphone: "",
          website: ""
        }}
        validationSchema={UserSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          http
            .post("users", values)

            .then(res => {
              console.log("O usuário foi salvo com sucesso.");
              console.table(res.data);
              onShowAlert();
              resetForm();
              setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <>
            <Alert color="info" isOpen={userAlert}>
              Usuário salvo com sucesso.
            </Alert>

            <Form>
              <FormGroup>
                <Label for="fullname">nome completo</Label>
                <Field
                  name="fullname"
                  type="text"
                  component={customInputForm}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">email</Label>
                <Field name="email" type="email" component={customInputForm} />
              </FormGroup>
              <FormGroup>
                <Label for="telephone">telefone</Label>
                <Field
                  name="telephone"
                  type="text"
                  component={customInputForm}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cellphone">celular</Label>
                <Field
                  name="cellphone"
                  type="text"
                  component={customInputForm}
                />
              </FormGroup>
              <FormGroup>
                <Label for="website">website</Label>
                <Field name="website" type="text" component={customInputForm} />
              </FormGroup>
              <FormGroup>
                <Button type="submit" size="sm" disabled={isSubmitting}>
                  Salvar
                </Button>
              </FormGroup>
            </Form>
          </>
        )}
      </Formik>

      {/*
      <h5 style={styles.title}>Cadastrar novo usuário sem Formik</h5>
      <Form>
        <FormGroup>
          <Label for="fullname">nome completo</Label>
          <Input required type="text" name="fullname" id="fullname" />
          <FormFeedback>mensagem de erro aqui</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input required type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">telefone</Label>
          <Input
            type="telephone"
            name="telephone"
            id="telephone"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            required
          />
          <FormText>exemplo : 19-1234-5678</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="cellphone">celular</Label>
          <Input
            type="cellphone"
            name="cellphone"
            id="cellphone"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            required
          />
          <FormText>exemplo : 19-1234-5678</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="email">website</Label>
          <Input type="text" name="website" id="website" />
        </FormGroup>
        <Button color="primary">cadastrar</Button>
      </Form>
      */}
    </div>
  );
};
