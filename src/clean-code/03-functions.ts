(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorByIdMovie(idmovie: string) {
    console.log({ idmovie });
  }

  // funcion para obtener el bio del actor por el id
  function getActorId(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: ModelMovie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;
    return true;
  }
  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullName(fullName)) return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result: number;
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 40000;
  };
})();

interface ModelMovie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}
