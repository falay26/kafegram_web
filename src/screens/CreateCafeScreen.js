import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//Components
import PanelContainer from "../components/Layouts/PanelContainer";
//Hooks
import useAxiosPrivate from "../hooks/useAxiosPrivate";
//Apis
import Apis from "../constants/apis";

const CreateCafe = () => {
  const axiosPrivate = useAxiosPrivate();

  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    try {
      let parameters = { username: username };
      const response = await axiosPrivate.post(
        Apis.CreateCafe,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        alert("Kafe başarıyla oluşturuldu.");
      }
    } catch (err) {}
  };

  return (
    <PanelContainer>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Kullanıcı Adı"
        type="email"
        fullWidth
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={onSubmit}>Kafe Oluştur</Button>
    </PanelContainer>
  );
};

export default CreateCafe;
