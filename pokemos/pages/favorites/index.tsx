import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { FavoritePokemons } from '../../components/pokemonts'
import { NoFavorites } from '../../components/ui'
import { localeFavorite } from '../../utils'

const FavoritePage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localeFavorite.pokemons())
  }, [])
  
  return (
    <Layout title='Pokemons - Favoritos'>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites/>)
        : ( <FavoritePokemons pokemons={favoritePokemons}/>)
      }
      
    </Layout>
  )
}

export default FavoritePage