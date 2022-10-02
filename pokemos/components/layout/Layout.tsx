import { FC } from "react";
import Head from "next/head";
import {Navbar} from "../ui/Navbar"

interface Props {
  title?: string;
  children: any;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonsApp"}</title>
        <meta name="author" content="Alba Lucia Gonzalez" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon: ${title}`}
        />
        <meta name="keyword" content={`${title}, pokemon, pokedex`} />
      </Head>

        <Navbar/>

      <main style={{
        padding: "0 20px",
        color: "#000"
      }}>{children}</main>
    </>
  );
};
