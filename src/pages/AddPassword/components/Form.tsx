import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Password } from "../../../types";
import useClients from "../../../hooks/useClients";

const Form = () => {
  const [status, clients] = useClients();

  const [title, setTitle] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const [client, setClient] = useState<string>();

  const navigate = useNavigate();

  const [passwords, storePassword] = useLocalStorage<Password[]>(
    "passwords",
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && username && password) {
      if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
      }

      const newPassword = { id: uuidv4(), title, username, password, client };
      storePassword((passwords) => [...passwords, newPassword]);
      alert("Password has been successfully added.");
      navigate("/");
    } else {
      alert(
        "One or more required fields are empty. Please check and try again."
      );
    }
  };

  if (status === "pending") {
    return <div>Loading form</div>;
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col space-y-2">
      <div className="flex flex-col">
        <label htmlFor="title">
          Title <span className="text-xs text-slate-500">(required)</span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-slate-400 p-1"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username">
          Username <span className="text-xs text-slate-500">(required)</span>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border border-slate-400 p-1"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="relative flex flex-col">
        <label htmlFor="password">
          Password <span className="text-xs text-slate-500">(required)</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          className="border border-slate-400 p-1"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((show) => !show)}
          className="absolute right-0 bottom-0 m-[3px] p-1 w-12 text-center text-sm hover:bg-slate-100"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {clients.length ? (
        <div className="flex flex-col">
          <label htmlFor="client">Client</label>
          <select
            name="client"
            id="client"
            className="border border-slate-400 p-1"
            onChange={(e) => setClient(e.target.value)}
          >
            <option value=""></option>
            {clients.map((client) => (
              <option key={client.name} value={client.name}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      <input
        type="submit"
        value="Add Password"
        className="bg-slate-700 text-slate-50 p-2"
      />
    </form>
  );
};

export default Form;
