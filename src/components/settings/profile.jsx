import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Divider, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./profile.css";

const Profile = () => {
  return (
    <Grid
      container
      columnGap={4}
      rowGap={2}
      sx={{
        width: {
          xs: "140%",
          md: "100%",
        },
      }}
    >
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: {
              xs: ".5rem ",
              md: "2rem 1rem ",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            Syed Moazam Ali
          </Typography>
          <Divider />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: {
                xs: ".5rem",
                md: "1rem",
              },
              width: "100%",
              marginTop: "1rem",
              padding: {
                xs: ".4rem",
                md: ".5rem 1rem",
              },
            }}
          >
            <EmailIcon />
            <Typography
              variant="body"
              component="div"
              sx={{
                fontSize: {
                  xs: ".65rem",
                  md: "1rem",
                },
              }}
            >
              syedmoazamali4321@gmail.com
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: {
                xs: ".5rem",
                md: "1rem",
              },
              width: "100%",
              marginTop: "1rem",
              padding: {
                xs: ".4rem",
                md: ".5rem 1rem",
              },
            }}
          >
            <LocationOnIcon />
            <Typography
              variant="body"
              component="div"
              sx={{
                fontSize: {
                  xs: ".7rem",
                  md: "1rem",
                },
              }}
            >
              Taxila, Pakistan
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <Card
          sx={{
            padding: {
              xs: ".5rem",
              md: " 1rem ",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            About me
          </Typography>

          <Typography
            variant="body2"
            component="p"
            sx={{
              fontSize: {
                xs: ".8rem",
                md: "1rem",
              },
            }}
          >
            Software Engineering Student | Frontend Web Developer
            <br />I am passionate about using technology to make a positive
            impact on society. I specialize in frontend web development, with
            experience in HTML, CSS, SASS, Bootstrap, JavaScript, React,Next JS,
            Typescript and Material UI.
          </Typography>
          <Divider
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          />
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            Details
          </Typography>

          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "2rem",
              width: "100%",
              marginTop: "1rem",
              padding: ".5rem 1rem",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  md: "1rem",
                },
                fontWeight: 600,
              }}
            >
              Full Name:
            </Typography>
            <Typography
              variant="body"
              component="div"
              sx={{
                fontSize: {
                  xs: ".7rem",
                  md: ".9rem",
                },
              }}
            >
              Syed Moazam Ali
            </Typography>
          </Stack>
          <Divider
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "2rem",
              width: "100%",
              marginTop: "1rem",
              padding: ".5rem 1rem",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  md: "1rem",
                },
                fontWeight: 600,
              }}
            >
              Zip Code:
            </Typography>
            <Typography
              variant="body"
              component="div"
              sx={{
                fontSize: {
                  xs: ".7rem",
                  md: ".9rem",
                },
              }}
            >
              47080
            </Typography>
          </Stack>
          <Divider
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "2rem",
              width: "100%",
              marginTop: "1rem",
              padding: ".5rem 1rem",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  md: "1rem",
                },
                fontWeight: 600,
              }}
            >
              url:
            </Typography>
            <Typography
              variant="body"
              component="div"
              sx={{
                fontSize: {
                  xs: ".7rem",
                  md: ".9rem",
                },
              }}
            >
              <a href="https://syedmoazamali.netlify.app/" className="link">
                Portfolio
              </a>
            </Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
