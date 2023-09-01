import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { api, getPoke } from "./pokeApi"

test('should return api data', async () => { 
    const mock = new MockAdapter(axios)
    const mockData = {
        "form_name": "",
        "form_names": [
          
        ],
        "form_order": 1,
        "id": 132,
        "is_battle_only": false,
        "is_default": true,
        "is_mega": false,
        "name": "ditto",
        "names": [
          
        ],
        "order": 215,
        "pokemon": {
          "name": "ditto",
          "url": "https://pokeapi.co/api/v2/pokemon/132/"
        },
        "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
          "front_shiny_female": null
        },
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "normal",
              "url": "https://pokeapi.co/api/v2/type/1/"
            }
          }
        ],
        "version_group": {
          "name": "red-blue",
          "url": "https://pokeapi.co/api/v2/version-group/1/"
        }
      }
      mock.onGet(api).reply(200, mockData)
      const result = await getPoke()
      expect(result).toEqual(mockData)
 })