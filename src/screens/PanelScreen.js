import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components
import PanelContainer from "../components/Layouts/PanelContainer";
//Hooks
import useAuth from "../hooks/useAuth";
//Constants
import Roles from "../constants/Roles";

const Panel = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const [loading] = useState(true);

  useEffect(() => {
    if (auth.roles.includes(Roles.Admin)) {
      navigate("/new_cafe");
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <PanelContainer loading={loading}>
      <h1>Panel Will be here.</h1>
    </PanelContainer>
  );
};

export default Panel;
