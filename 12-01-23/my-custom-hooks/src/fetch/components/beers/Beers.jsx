import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BEERS);
  if (loading) return `Loading...`;
  if (error) return `Errore!`;
  if (!data) return "";

  const { id, name, brand } = data;

  return (
    <div>
      <h2>Check how many beer exist.</h2>
      <h3>Beer Id: {id}</h3>
      <h2>
        Beer Name: {name} / Beer Brand: {brand}
      </h2>
      <button onClick={refetch}>Re-Fetch Data</button>
    </div>
  );
}
