export interface ClientData {
  name: string;
  color: string;
}

export interface Password {
  id: string;
  title: string;
  username: string;
  password: string;
  client?: string;
}
