import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function Users() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.USERS);
  if (loading) return `Loading...`;
  if (error) return `Errore!`;
  if (!data) return "";

  const { id, first_name, last_name } = data;

  return (
    <div>
      <h2>Check how many users exist.</h2>
      <h3>User Id: {id}</h3>
      <h2>
        User Name: {first_name} / User Surname: {last_name}
      </h2>
      <button onClick={refetch}>Re-Fetch Data</button>
    </div>
  );
}
