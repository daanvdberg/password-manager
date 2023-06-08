import useLocalStorage from "../../../hooks/useLocalStorage";
import { Password as PasswordType } from "../../../types";
import Password from "../../../components/Password";
import useClients from "../../../hooks/useClients";

const PasswordList = () => {
  const [status, clients] = useClients();

  const [passwords] = useLocalStorage<PasswordType[]>("passwords", []);

  if (status === "pending") {
    return <div>Loading passwords</div>;
  }

  return (
    <div>
      {passwords.length ? (
        passwords.map((password) => {
          const client = clients.find(
            (value) => value.name === password.client
          );
          return (
            <Password key={password.id} data={password} color={client?.color} />
          );
        })
      ) : (
        <span className="text-sm text-slate-500">
          You don't have any passwords yet.
        </span>
      )}
    </div>
  );
};

export default PasswordList;
