import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Produto({ nome, foto, id, valor, unidade }) {
  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
