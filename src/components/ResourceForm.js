// 1. Create a form component
// 1.1 Set up input fields in HTML DONE
// 1.2 state of the form DONE
// 1.3 submit button DONE

//  2.0 Create action creator
//  2.1 Dispatch some action

//  3. Add a new case to the reducer that handles this action.
//
import React, { useState } from "react";
import { addResource } from "../store/resources/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueResourceTypes } from "../store/resources/selectors";

const ResourceForm = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const allTypes = useSelector(getUniqueResourceTypes);

  const [type, setType] = useState(allTypes[0]);
  const dispatch = useDispatch();

  // console.log("all types in component", allTypes);

  const onSubmitForm = () => {
    const action = addResource(name, url, type);
    console.log("created action", action);
    dispatch(action);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hey im the form!</h1>
      <div>
        <p>Name: </p>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <p>Url: </p>
        <input value={url} onChange={e => setUrl(e.target.value)} />
      </div>
      <div>
        <select value={type} onChange={e => setType(e.target.value)}>
          {allTypes.map((typeName, i) => (
            <option value={typeName} key={i}>
              {typeName}
            </option>
          ))}
        </select>
      </div>
      <button style={{ marginTop: 40 }} onClick={onSubmitForm}>
        Add!
      </button>
    </div>
  );
};

export default ResourceForm;
