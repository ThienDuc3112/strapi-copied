import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [componentName, setComponentName] = useState<string>("");
  const [singleTypeName, setSingleTypeName] = useState<string>("");
  const navigate = useNavigate();
  return (
    <>
      {/** */}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/component/new/${componentName}`);
          }}
        >
          <label htmlFor="componentName">Component name</label>
          <input
            className="bg-slate-100 border-2 border-red-500"
            placeholder="component name"
            onChange={(e) => setComponentName(e.target.value)}
            value={componentName}
            name="componentName"
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/** */}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/singletype/new/${componentName}`);
          }}
        >
          <label htmlFor="singleTypeName">Single type name</label>
          <input
            className="bg-slate-100 border-2 border-red-500"
            placeholder="Single type name"
            onChange={(e) => setSingleTypeName(e.target.value)}
            value={singleTypeName}
            name="singleTypeName"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default App;
