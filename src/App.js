import "./App.css";
import { useSelector } from "react-redux";
import {
  getNumberOfDevelopers,
  getDevelopers,
  getDevelopersWithThisFavourite,
} from "./store/developers/selectors";
import {
  getResources,
  convertResourceIdsToNames,
} from "./store/resources/selectors";
import React, { useState } from "react";

function App() {
  const [selectedResource, setSelectedResource] = useState(1);
  const [selectedDeveloper, setSelectedDeveloper] = useState(1);

  const developerCount = useSelector(getNumberOfDevelopers);
  const allResources = useSelector(getResources);
  const allDevelopers = useSelector(getDevelopers);
  const withFavorite = useSelector(
    getDevelopersWithThisFavourite(selectedResource)
  );

  const selectedDev = allDevelopers.find(d => d.id === selectedDeveloper);

  const favorites = useSelector(
    convertResourceIdsToNames(selectedDev.favorites)
  );

  console.log("devs favorites", favorites);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Web development resources</h1>
        <div>
          <h3>Developers: {developerCount}</h3>
        </div>
        <div>
          <select
            value={selectedResource}
            onChange={e => setSelectedResource(parseInt(e.target.value))}
          >
            {allResources.map(resource => (
              <option value={resource.id} key={resource.id}>
                {resource.name}
              </option>
            ))}
          </select>
          <div>
            {withFavorite.map(d => (
              <h3>{d.name}</h3>
            ))}
          </div>
        </div>
        <div>
          <select
            onChange={e => setSelectedDeveloper(parseInt(e.target.value))}
            value={selectedDeveloper}
          >
            {allDevelopers.map(d => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
