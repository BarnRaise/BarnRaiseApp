import * as React from "react";
import Link from "next/link";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  maxWidth: "50%",
  maxHeight: "50%",
});
<link href="https://fonts.googleapis.com/css2?family=Figtree&display=swap" rel="stylesheet" />;
export default function AvatarSection(props: {
  role: string;
  href: string;
  bgColor: string;
  switchRole: string;
  avatar: string;
}) {
  const { role, href, bgColor, switchRole, avatar } = props;
  return (
    <Paper
      sx={{
        p: 4,
        width: "100%",
        height: "150px",
        backgroundColor: bgColor,
        color: "#CAEFF9",
        palatte: {
          secondary: {
            main: "#F9FBFF",
          },
        },
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase sx={{ width: 192 }}>
            <Img alt="complex" src={avatar} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography variant="h3" component="div" className="font-bold">
                {role}
              </Typography>
              <Typography sx={{ cursor: "pointer" }} variant="body2" className="text-white">
                Rich Bodell
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" component="div" className="text-white" fontFamily={"Figtree"}>
            Not a {role.toLowerCase()}?
          </Typography>
          <Link href={href} passHref>
            <Typography variant="subtitle1" component="div">
              <button className="text-white bg-base-100 shadow-md py-1.5 px-3 my-2 text-sm rounded-full hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col duration-200">
                Switch to {switchRole}
              </button>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
