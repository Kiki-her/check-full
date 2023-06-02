import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";

const Checkout = () => {
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
          <Typography>Total Amount: {totalAmount}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            value={paymentAmount}
            onChange={handlePaymentAmountChange}
            label="Payment Amount"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Change: {calculateChange()}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Complete Payment
          </Button>
        </Grid>
      </Grid>
      {/* 商品一覧や選択などの表示 */}
    </div>
  );
};

export default Checkout;
