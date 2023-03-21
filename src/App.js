import * as React from "react";
import Box from "@mui/material/Box";

import GetPokemonsName from "./components/GetPokemonName";

export default function MyApp() {
  return (
    <Box sx={{ padding: "15px 30px" }} className="home">
      <GetPokemonsName />
    </Box>
  );
}
