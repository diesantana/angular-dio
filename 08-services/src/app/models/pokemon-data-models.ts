// pokemon-data-models.ts
export type PokemonDataModel = {
    name: string;
    id: number;
    sprites: {
        front_default: string
    };
    types: {
        slot: number;
        type: {
          name: string;
          cor: string;
        };
    }[]
}

