import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  `${import.meta.env.VITE_SUPABASE_URL}`,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
);

function App() {
  const [countries, setCountries] = useState<any[] | null>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries &&
        countries.map((country) => <li key={country.name}>{country.name}</li>)}
    </ul>
  );
}

export default App;
