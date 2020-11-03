export const getNumberOfDevelopers = reduxState =>
  reduxState.developers.all.length; // => [{}, {}]

export const getDevelopers = reduxState => reduxState.developers.all; // => [{}, {}]

export const getDevelopersWithThisFavourite = favoriteId => reduxState => {
  return reduxState.developers.all.filter(d =>
    d.favorites.includes(favoriteId)
  );
};
