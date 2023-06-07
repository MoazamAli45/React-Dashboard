import React from "react";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import "./hero.css";
import "./analyticSection.css";
import HBarChart from "./../components/charts/HbarChart";
import GeoChart from "./../components/charts/GeoChart";
import PieChart from "./../components/charts/PieChart";
import Countup from "react-countup";
const AnalyticsSection = () => {
  return (
    <div className="analytic-section">
      <Grid container columnSpacing={2} rowSpacing={1} xs={12}>
        <Grid item md={6} sm={12}>
          <Stack
            direction="row"
            sx={{
              columnGap: {
                md: "1rem",
                xs: ".5rem",
              },
              rowGap: "1rem",
              display: "flex",
              marginBottom: ".5rem",
              // flexDirection: {
              //   xs: "column",
              //   md: "row",
              // },
            }}
          >
            <Card
              sx={{ padding: "0 1rem 0 1rem ", width: "50%" }}
              className="gradient-blue"
            >
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h5" component="div">
                  Visitors
                </Typography>

                <Typography gutterBottom variant="h4" component="h4">
                  <Countup end={60670} duration={4} delay={0.3} />
                </Typography>
                <Typography variant="body" component="div">
                  since last 3 months
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ padding: "0 1rem 0 1rem ", width: "50%" }}
              className="gradient-green"
            >
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h5" component="div">
                  Visitors
                </Typography>

                <Typography gutterBottom variant="h4" component="h4">
                  <Countup end={24670} duration={4} delay={0.3} />
                </Typography>
                <Typography variant="body" component="div">
                  since last month
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack
            direction="row"
            sx={{
              columnGap: "1rem",
              rowGap: "1rem",
              display: "flex",
              marginBottom: ".5rem",
              // flexDirection: {
              //   xs: "column",
              //   md: "row",
              // },
            }}
          >
            <Card
              sx={{ padding: "0 1rem 0 1rem ", width: "50%" }}
              className="gradient-blue"
            >
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h5" component="div">
                  Visitors
                </Typography>

                <Typography gutterBottom variant="h4" component="h4">
                  <Countup end={18670} duration={4} delay={0.3} />
                </Typography>
                <Typography variant="body" component="div">
                  since last week
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ padding: "0 1rem 0 1rem ", width: "50%" }}
              className="gradient-green"
            >
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h5" component="div">
                  Visitors
                </Typography>

                <Typography gutterBottom variant="h4" component="h4">
                  <Countup end={5670} duration={4} delay={0.3} />
                </Typography>
                <Typography variant="body" component="div">
                  since last day
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card
            sx={{
              minHeight: "46vh",
              padding: ".75rem .5rem .5rem .5rem",
            }}
          >
            <HBarChart />
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              minWidth: "49%",
              minHeight: "34vh",
              padding: ".75rem .5rem .5rem .5rem",
            }}
          >
            <GeoChart />
          </Card>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card
            sx={{
              minWidth: "49%",
              minHeight: "34vh",
              padding: ".75rem .5rem .5rem .5rem",
            }}
          >
            <PieChart />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsSection;
