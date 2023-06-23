import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import Popup from "reactjs-popup";
import TextField from "@mui/material/TextField";
import "./Table.css";
import ShopIcon from "./ShopIcon";

let fakeData = [
  {
    title: "筋肉",
    author: "オー",
    price: 1000,
  },
  {
    title: "ランドリー",
    author: "星",
    price: 500,
  },
  {
    title: "What is OK?",
    author: "Miro",
    price: 100,
  },
  {
    title: "刺繍糸でできた家",
    author: "マーガレット",
    price: 800,
  },
];

let newItemObj = {
  title: "",
  author: "",
  price: 0,
};
const Table = function () {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      // const products = await fetch("http://localhost:9000/products");
      console.log(fakeData);
      setItems(fakeData);
    }
    fetchProducts();
  }, items);

  const addProduct = async function () {
    // 後ほど、DBに追加仕様に書き換える
    setItems([...items, newItemObj]);
    // await fetch("http://localhost:9000/products", {
    //   method: "POST",
    //   body: newItemObj,
    // });

    newItemObj = {
      title: "",
      author: "",
      price: 0,
    };
  };

  return (
    <>
      <header>
        <ShopIcon items={cartItems} />
      </header>
      <Container>
        <div className="listTitle">
          商品リスト
          <Popup
            trigger={
              <button className="plusButton" onClick>
                ➕
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> 商品登録 </div>
                <div className="content">
                  <TextField
                    label="商品名"
                    variant="outlined"
                    onChange={(event) => {
                      newItemObj.title = event.target.value;
                    }}
                  />
                  <TextField
                    label="著者"
                    variant="outlined"
                    onChange={(event) => {
                      newItemObj.author = event.target.value;
                    }}
                  />
                  <TextField
                    label="値段"
                    variant="outlined"
                    onChange={(event) => {
                      newItemObj.price = Number(event.target.value);
                    }}
                  />
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      newItemObj = {
                        title: "",
                        author: "",
                        price: 0,
                      };
                      close();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      addProduct();
                      close();
                    }}
                  >
                    登録
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>

        {items.map((obj) => {
          return (
            <ProductCard
              obj={obj}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Table;
