import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Popup from "reactjs-popup";
import "./ProductCard.css";

// 引数としてproductの情報を受け取って、Cardを作成する。
// 親コンポーネントではmapしてproductの数だけCardを作る
const ProductCard = function ({ obj, cartItems, setCartItems }) {
  // 疑似product
  const plusCartNumber = function () {
    // buttonのonClick機能
    // 会計に追加されたら、カートの数字を変える
  };

  const addCart = function () {
    // buttonのonClick機能
    // 会計に選択されたpriceを追加する
    setCartItems([...cartItems, obj]);
    console.log("GGGGGG");
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {obj.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {obj.author}
        </Typography>
        <Typography variant="body2">{obj.price}円</Typography>
      </CardContent>
      <CardActions>
        <Popup
          trigger={
            <Button variant="contained" size="small">
              カートに追加
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> YAY! </div>
              <div className="content">商品をカートに追加しますか？</div>
              <div className="actions"></div>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  addCart();
                  close();
                }}
              >
                yes
              </button>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                no
              </button>
            </div>
          )}
        </Popup>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="card" variant="outlined">
        {card}
      </Card>
    </Box>
  );
};

export default ProductCard;
