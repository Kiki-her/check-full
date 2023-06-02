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
const ProductCard = function ({ title, author, price }) {
  // 疑似product
  title = "生まれた時から筋肉少女帯";
  author = "オーカム";
  price = 2000;

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
        <Popup
          trigger={
            <Button variant="contained" size="small" onClick>
              会計に追加
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
              <div className="content">商品が会計に追加されました！</div>
              <div className="actions"></div>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close
              </button>
            </div>
          )}
        </Popup>
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
