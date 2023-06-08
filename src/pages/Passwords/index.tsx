import PasswordList from "./components/PasswordList";

const Passwords = () => {
  return (
    <div className="w-full p-6 max-w-xl">
      <h2 className="text-xl font-medium mb-4 pb-2 border-b">My Passwords</h2>
      <PasswordList />
    </div>
  );
};

export default Passwords;
