export const getDevsFavourites = devId => reduxState => {
  const dev = reduxState.developers.find(d => d.id === devId);
  const favArray = dev.favorites; // [1,3,5]
  const favNames = favArray.map(
    id => reduxState.resources.find(r => r.id === id).name
  );
  return favNames;
};
