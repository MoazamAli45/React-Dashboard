import { Paper } from "@mui/material";
import React from "react";
import List from "../components/settings/dashList";

const Settings = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        minHeight: "80vh",
      }}
    >
      <List />
    </Paper>
  );
};

export default Settings;
