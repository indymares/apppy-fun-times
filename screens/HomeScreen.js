import _ from 'lodash'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import axios from 'axios'

export default function HomeScreen() {
  const [pokemon, setPokemon] = useState([])
  const [chosenPokemonName, setChosenPokemonName] = useState(null)
  const [chosenPokemon, setChosenPokemon] = useState({})

  useEffect(() => {
    async function getData() {
      const response = await axios('https://pokeapi.co/api/v2/pokemon')
      setPokemon(response.data.results)
    }

    getData()
  }, [])

  useEffect(() => {
    async function getChosenData() {
      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon/${chosenPokemonName}`
      )
      setChosenPokemon(response.data)
    }

    if (chosenPokemonName === null) return

    getChosenData()
  }, [chosenPokemonName])

  const handleChosePokemon = (item) => setChosenPokemonName(item.name)
  const handleGoBack = () => {
    setChosenPokemon({})
    setChosenPokemonName(null)
  }

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => handleChosePokemon(item)}
      style={{
        padding: 16,
        backgroundColor: index % 2 === 0 ? '#ffcb05' : null,
      }}>
      <Text
        style={{
          color: '#3c5aa6',
          fontWeight: '700',
          fontSize: 20,
          textTransform: 'capitalize',
        }}>
        {item.name}
      </Text>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {pokemon.length === 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 32 }}>Loading...</Text>
        </View>
      ) : _.some(chosenPokemon) ? (
        <Pokemon pokemon={chosenPokemon} />
      ) : (
        <FlatList
          data={pokemon}
          renderItem={renderItem}
          keyExtractor={(poke) => poke.name}
        />
      )}
      {_.some(chosenPokemon) && (
        <View style={styles.center}>
          <Pressable style={styles.button} onPress={handleGoBack}>
            <Text style={{ color: 'white', fontSize: 20 }}>Back</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

function decimetersToFeet(decimeters) {
  const feet = (decimeters / 3.048) * 10
  return Math.round(feet) / 10
}

function hectogramsToPounds(hectograms) {
  const feet = (hectograms / 4.536) * 10
  return Math.round(feet) / 10
}

function Pokemon({ pokemon }) {
  return (
    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        resizeMode="contain"
        source={{ uri: pokemon.sprites.front_default }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
        Name: {pokemon.name}
      </Text>
      <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
        Height: {decimetersToFeet(pokemon.height)}ft.
      </Text>
      <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
        Weight: {hectogramsToPounds(pokemon.weight)}lbs.
      </Text>
      <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
        Type: {pokemon.types.map((type) => type.type.name).join(', ')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2a75bb',
  },
})
