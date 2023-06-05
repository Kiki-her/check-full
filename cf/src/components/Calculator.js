import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

// いらないかも。textfieldで数字入力してもらえば良くね？
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <TextField
          label="Input"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Result"
          variant="outlined"
          fullWidth
          value={result}
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("1")}>
              1
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("2")}>
              2
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("3")}>
              3
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("4")}>
              4
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("5")}>
              5
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("6")}>
              6
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("7")}>
              7
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("8")}>
              8
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("9")}>
              9
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("0")}>
              0
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("+")}>
              +
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("-")}>
              -
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("*")}>
              *
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => handleClick("/")}>
              /
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleCalculate}>
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default Calculator;
