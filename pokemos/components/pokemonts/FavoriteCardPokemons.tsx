import { Card, Grid, Link } from "@nextui-org/react";
import { Router, useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemons: FC<Props> = ({ pokemonId }) => {
    const router = useRouter()

    const handleFavoriteCliked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

  return (
    <Grid xs={6} sm={3} md={1} key={pokemonId}
        onClick={handleFavoriteCliked}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
