import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = function ({ title, author, price }) {
  const addingAlert = function () {
    // buttonのonClick機能
    // 会計に追加されたら、popupを出して"商品が追加されました！"と通知する
  };

  const addCart = function () {
    // buttonのonClick機能
    // 会計に選択されたpriceを追加する
    // 追加完了したら、addingAlert()を実行する
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2">{price}円</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick>
          会計に追加
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default ProductCard;
