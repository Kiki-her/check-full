import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);

  // 商品選択
  const handleItemSelection = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  // 合計金額算出
  const calculateTotalAmount = () => {
    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
    setTotalAmount(total);
  };

  // お釣り計算
  const calculateChange = () => {
    return paymentAmount - totalAmount;
  };

  // 受け取り金額変更ハンドラ
  const handlePaymentAmountChange = (event) => {
    setPaymentAmount(Number(event.target.value));
  };

  return (
    <div>
      <Typography variant="h5">Checkout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>合計: {totalAmount}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            value={paymentAmount}
            onChange={handlePaymentAmountChange}
            label="受け取り"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>お釣り: {calculateChange()}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            DONE
          </Button>
        </Grid>
      </Grid>
      {/* 商品一覧や選択などの表示 */}
    </div>
  );
};

export default Checkout;
