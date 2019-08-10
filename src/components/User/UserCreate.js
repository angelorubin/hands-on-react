import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
      bsSize="sm"
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
  const dispatch = useDispatch();

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
          http.post("users", values).then(res => {
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
              O usuário foi salvo com sucesso.
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
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Salvar
                </Button>
              </FormGroup>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
