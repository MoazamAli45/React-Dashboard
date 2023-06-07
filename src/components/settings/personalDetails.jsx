import React from "react";
import { Grid, TextField } from "@mui/material";
// import { Textarea } from "@mui/joy";
import Card from "@mui/material/Card";
import { MenuItem } from "@mui/material";

const options = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Super Admin",
    label: "Super Admin",
  },
  {
    value: "Supervisor",
    label: "Supervisor",
  },
];

const PersonalDetails = () => {
  return (
    <Grid
      container
      columnGap={4}
      rowGap={2}
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} md={5}>
        <Card
          sx={{
            padding: "2rem 1rem ",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                label="Name"
                variant="outlined"
                size="medium"
                sx={{
                  width: "95%",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location"
                variant="outlined"
                size="medium"
                sx={{
                  width: "95%",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                variant="outlined"
                size="medium"
                sx={{
                  width: "95%",
                  marginTop: "1rem",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Category"
                size="small"
                required
                sx={{
                  width: "100%",
                  marginTop: "4rem",
                }}
                select
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <Card
          sx={{
            padding: "2rem 1rem ",
          }}
        ></Card>
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
