import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Test() {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    subscrib: false,
    age: 0,
    languge: [""],
  });

  const handler = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const sub = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", margin: 3 }}
        onSubmit={sub}
      >
        <TextField
          name="name"
          type={"text"}
          sx={{ margin: 3 }}
          value={input.name}
          onChange={handler}
          placeholder="name"
          variant="outlined"
        />
        <TextField
          name="email"
          type={"text"}
          sx={{ margin: 3 }}
          value={input.email}
          onChange={handler}
          placeholder="email"
          variant="standard"
        />
        <TextField
          name="password"
          type={"password"}
          sx={{ margin: 3 }}
          value={input.password}
          onChange={handler}
          placeholder="password"
          variant="filled"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setinput((perv) => ({ ...perv, subscrib: !input.subscrib }))
                }
              />
            }
            label="subscribe to the new letter"
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={input.age}
            label="Age"
            onChange={handler}
            sx={{ margin: 3 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel> languge</InputLabel>
          <Select
            name="languge"
            value={input.languge}
            label="languge"
            onChange={handler}
            sx={{ margin: 3 }}
          >
            <MenuItem value={"english"}>english</MenuItem>
            <MenuItem value={"spanish"}>spanish</MenuItem>
            <MenuItem value={"dutch"}>dutch</MenuItem>
          </Select>
        </FormControl>

        <button style={{ marginTop: 3 }} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Test;
