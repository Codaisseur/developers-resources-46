export const getResources = state => state.resources.all;

export const convertResourceIdsToNames = favoritesArray => reduxState => {
  // [1,4,3]
  // reduxState.resources.all // all the resources
  // filter // => [{..}, {..}, {...}]
  const favoriteResources = reduxState.resources.all.filter(r =>
    favoritesArray.includes(r.id)
  );
  return favoriteResources.map(r => r.name);
};

export const getDevsFavourites = devId => reduxState => {
  const dev = reduxState.developers.find(d => d.id === devId);
  const favArray = dev.favorites; // [1,3,5]
  const favNames = favArray.map(
    id => reduxState.resources.find(r => r.id === id).name
  );
  return favNames;
};
