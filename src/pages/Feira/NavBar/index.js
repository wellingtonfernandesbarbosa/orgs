import { Nav } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <IconButton>
        <Badge color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
