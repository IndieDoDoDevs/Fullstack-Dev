import { useState } from "react";
import "./App.css";
import { useReplicaState } from "./hooks/useReplicaState.tsx";
import axios from "axios";
// import "./components/Button.module.css";

let render = 0;

function App() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    id: string;
  }>({ name: "", email: "", id: "" });

  const onSave = async () => {
    console.log("guuu");

    await axios
      .post("http://localhost:3000/users", {
        id: crypto.randomUUID(),
        ...formData,
      })
      .then((res) => {
        console.log({ res });
        setFormData({ name: "", email: "", id: "" });
      })
      .catch((err) => {
        console.log({ err });
      });

    console.log("huuu");
  };

  return (
    <>
      {render++}
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            onSave();
          }}
        />
      </form>
    </>
  );
}

export default App;
