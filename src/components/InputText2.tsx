import { TextField } from "@mui/material";
import React from "react";
import {
  addSubscription,
  notifySubscriptions,
} from "../observable/subscription";

function InputText2() {
  const [value, setValue] = React.useState("");
  addSubscription(setValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    notifySubscriptions(event.target.value);
  };
  return (
    <div>
      <TextField label="Input2" value={value} onChange={handleChange} />
    </div>
  );
}

export default InputText2;
