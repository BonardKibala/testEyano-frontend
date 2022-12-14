import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Container,
  Typography,
  Alert,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatedAdmin } from "../../reducers/createReducer";
import CheckboxWrapper from "../../components/FormUi/checkbox";
import ButtonWrapper from "../../components/FormUi/Button";
import { customizedTextfield } from "../../components/FormUi/Textfield/index";
const INITIAL_FORM_STATE = {
  termsOfService: false,
};
const FORM_VALIDATION = Yup.object().shape({
  termsOfService: Yup.boolean()
    .oneOf([true], "Les conditions doivent être acceptées")
    .required("Les conditions doivent être acceptées"),
});
const UpdateAdminForm = (props) => {
  const { updateError, loading, updateSucces } = useSelector((state) => state.create);
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    ...props.location.state,
  });

  const admin = {
    ...props.location.state.admin,
  };
  return (
    <div
      style={{
        width: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={async (values) => {
                if (values.termsOfService) {
                  const body = {
                    nom: data.nom,
                    postnom: data.postnom,
                    prenom: data.prenom,
                    email: data.email,
                    telephone: data.telephone,
                    admin_role: data.admin.admin_role,
                    description: data.admin.description,
                    id_utilisateur: data.id_utilisateur,
                    id_admin: admin.id_admin,
                  };
                  await dispatch(updatedAdmin(body));
                }
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#310039",
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Modifier les infos d'un administrateur MyCampa
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {updateSucces ? (
                      <Alert
                        variant="outlined"
                        severity="success"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {updateSucces}
                      </Alert>
                    ) : updateError ? (
                      <Alert
                        variant="outlined"
                        severity="success"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {updateError}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      variant="outlined"
                      label="Nom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.nom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          nom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      label="Postnom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.postnom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          postnom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      label="Prenom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.prenom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          prenom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.email}
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      label="Téléphone"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.telephone}
                      onChange={(e) =>
                        setData({
                          ...data,
                          telephone: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        sx={[{ width: "100%" }, customizedTextfield]}
                        value={data.admin.admin_role}
                        onChange={(e) =>
                          setData({
                            ...data,
                            admin: {
                              admin_role: e.target.value,
                            },
                          })
                        }
                      >
                        <MenuItem value="super_admin">super-admin</MenuItem>
                        <MenuItem value="system_admin">system_admin</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Description"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.admin.description}
                      onChange={(e) =>
                        setData({
                          ...data,
                          admin: {
                            description: e.target.value,
                          },
                        })
                      }
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <CheckboxWrapper
                      name="termsOfService"
                      legend="Conditions de services"
                      label="J'accepte"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <ButtonWrapper
                      sx={{
                        bgcolor: "#290038",
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 2,
                        alignSelf: "center",
                        width: "100%",
                        "&:hover": {
                          bgcolor: "#290038",
                        },
                      }}
                    >
                      {loading ? "En cours......" : "Enregistrer"}
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateAdminForm;
