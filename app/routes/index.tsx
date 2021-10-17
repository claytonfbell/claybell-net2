import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../styles/index.css";
import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  let data = useLoaderData();
const theme=createTheme({palette:{mode:'dark'}})
  return (
    <>
    <ThemeProvider theme={theme}>

      <Container>
        <CssBaseline />
        <Paper sx={{ padding: 2 }}>Hello World</Paper>
      </Container>
    </ThemeProvider>
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2>Welcome to Remix!</h2>
        <p>
          <a href="https://docs.remix.run">Check out the docs</a> to get
          started.
        </p>
        <p>Message from the loader: {data.message}</p>
        <p>
          <Link to="not-found">Link to 404 not found page.</Link> Clicking this
          link will land you in your root CatchBoundary component.
        </p>
      </div>
    </>
  );
}
