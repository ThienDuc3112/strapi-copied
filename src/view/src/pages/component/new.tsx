import { useState } from "react";
import { useParams } from "react-router-dom";
import { Attribute } from "../../interface/schema";

const NewComponent = () => {
  const { name } = useParams();
  const [attributes, setAttributes] = useState<Record<string, Attribute>>({});
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <div>Creating component {name}</div>
      <div>
        {Object.keys(attributes).map((key) => {
          return (
            <div>
              <div>{key}</div>
              <div>{attributes[key].type}</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setPopup(true);
        }}
      >
        Add attribute
      </button>
    </div>
  );
};

export default NewComponent;
