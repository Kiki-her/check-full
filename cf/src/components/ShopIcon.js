import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

// budgeContentも変動するようにする
const ShopIcon = function ({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const totalNum = cartItems.length;
  return (
    <IconButton
      aria-label="cart"
      onClick={() => navigate("/check", { state: cartItems })}
    >
      <StyledBadge badgeContent={totalNum} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShopIcon;
