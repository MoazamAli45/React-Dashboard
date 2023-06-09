import React from "react";
import { Grid, TextField } from "@mui/material";
// import { Textarea } from "@mui/joy";
import Card from "@mui/material/Card";
import { MenuItem, Typography } from "@mui/material";

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
      rowGap={3}
      sx={{
        justifyContent: {
          md: "center",
        },
        width: {
          xs: "140%",
          md: "100%",
        },
      }}
    >
      <Grid item xs={12} md={5}>
        <Card
          sx={{
            padding: {
              xs: ".5rem .5rem 1rem .5rem ",
              md: "2rem 1rem ",
            },
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Personal Details
          </Typography>
          <Grid container rowSpacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                size="medium"
                sx={{
                  width: "95%",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Location"
                variant="outlined"
                size="medium"
                sx={{
                  width: {
                    xs: "95%",
                    md: "95%",
                  },
                }}
              />
            </Grid>
            <Grid item md={7} xs={12}>
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Category"
                size="small"
                required
                sx={{
                  width: "100%",
                  marginTop: "2rem",
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
            padding: {
              xs: ".5rem .5rem 1rem .5rem ",
              md: "2rem 1rem ",
            },
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Contact Information
          </Typography>
          <Grid container rowSpacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                label="Contact Phone"
                variant="outlined"
                size="medium"
                sx={{
                  width: {
                    xs: "100%",
                    md: "95%",
                  },
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                size="medium"
                sx={{
                  width: {
                    xs: "100%",
                    md: "95%",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Profile Url"
                variant="outlined"
                size="medium"
                sx={{
                  width: "95%",
                  marginTop: "1rem",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <TextField
                label="Address"
                variant="outlined"
                size="medium"
                sx={{
                  width: {
                    xs: "100%",
                    md: "95%",
                  },
                  marginTop: "1rem",
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
