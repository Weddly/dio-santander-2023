import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = "Charmander"
  pokeData: PokemonData

  constructor(private service: PokemonService) {
    this.pokeData = {
      id: 0,
      name: '',
      types: [{ slot: 0, type: { name: '', url: '' } }],
      sprites: {
        front_default: ''
      }
    }
  }
  ngOnInit(): void {
    this.service.getPokemon('mew').subscribe({
      next: (res) => {
        this.pokeData = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => console.log('not found')
    });
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName.toLowerCase()).subscribe({
      next: (res) => {
        this.pokeData = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => console.log(err)
    });
  }


}
