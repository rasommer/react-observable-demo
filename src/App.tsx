import { Stack } from "@mui/material";
import "./App.css";
import InputContainer1 from "./components/InputContainer1";
import InputContainer2 from "./components/InputContainer2";

function App() {
  return (
    <Stack alignItems={"center"}>
      <h3>Sharing data through observable pattern in Typescript</h3>
      <Stack spacing={2}>
        <InputContainer1 />
        <InputContainer2 />
      </Stack>
    </Stack>
  );
}

export default App;
