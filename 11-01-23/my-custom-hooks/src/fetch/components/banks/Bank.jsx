import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function Banks() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BANKS);
  if (loading) return `Loading...`;
  if (error) return `Errore!`;

  const { id, bank_name } = data;

  return (
    <div>
      <h2>Check how many bank exist.</h2>
      <h3>
        Bank Id: {id} / Bank Name: {bank_name}
      </h3>
      <button onClick={refetch}>Re-Fetch Data</button>
    </div>
  );
}
