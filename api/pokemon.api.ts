import { PokmonInterface } from "@/context/pokmon/pokmon.interface";

const getAll = async({limit = 10, offset = 0}) => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }');
        if(response){
            const json = response.json();
            console.log('json', json)
        }

    }catch(error){
        console.log('error')
    }
}

const getPokmon = async(id: string): Promise<PokmonInterface> => {
    try {
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
        // cache: 'force-cache',// TODO: cambiar esto en un futuro
        next: {
          revalidate: 60 * 60 * 30 * 6
        }
      }).then( resp => resp.json() );
    
      console.log('Se cargó: ', pokemon.name);
    
      return pokemon;
      
    } catch (error) {
      //notFound();
      console.log('error')
    }
  
  }
  