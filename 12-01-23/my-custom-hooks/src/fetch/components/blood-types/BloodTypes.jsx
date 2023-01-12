import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);
  if (loading) return `Loading...`;
  if (error) return `Errore!`;
  if (!data) return "";

  const { id, type, rh_factor, group } = data;

  return (
    <div>
      <h2>Check how many blood types exist. It can save your life.</h2>
      <h3>
        Blood Id: {id} / Type: {type}
      </h3>
      <h3>
        Rh Factor: {rh_factor} / Group: {group}
      </h3>
      <button onClick={refetch}>Re-Fetch Data</button>
    </div>
  );
}
