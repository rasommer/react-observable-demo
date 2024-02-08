import { TextField } from "@mui/material";
import React from "react";
import {
  addSubscription,
  notifySubscriptions,
} from "../observable/subscription";

function InputText1() {
  const [value, setValue] = React.useState("");
  addSubscription(setValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    notifySubscriptions(event.target.value);
  };
  return (
    <>
      <TextField label="Input1" value={value} onChange={handleChange} />
    </>
  );
}

export default InputText1;
