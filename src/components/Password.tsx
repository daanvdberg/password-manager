import { useEffect, useState } from "react";
import { Password as PasswordType } from "../types";

interface PasswordProps {
  data: PasswordType;
  color?: string;
}

const obfuscatePassword = (password: string) => "•".repeat(password.length);

const Password = ({ data, color }: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(obfuscatePassword(data.password));

  useEffect(() => {
    setPassword(
      showPassword ? data.password : obfuscatePassword(data.password)
    );
  }, [showPassword]);

  return (
    <div className="relative rounded mb-2 pl-3 bg-slate-50 overflow-hidden">
      <div
        className="w-3 absolute top-0 left-0 bottom-0"
        style={color ? { backgroundColor: color } : {}}
      ></div>
      <div className="py-3 px-4">
        <div className="text-lg font-semibold">{data.title}</div>
        {data.client ? (
          <p className="text-xs text-slate-500">Client: {data.client}</p>
        ) : null}
        <div className="mt-2">Username: {data.username}</div>
        <div className="flex justify-between items-center">
          <div>
            Password: <span>{password}</span>
          </div>
          <button
            className="text-sm py-1 px-2 text-white  bg-slate-700"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
