import { useState, useEffect } from "react";

type Checkbox = {
  id: number;
  name: string;
  address: string;
};
const useLocations = () => {
  const [locations, setLocations] = useState<Checkbox[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/location/");
        const data = await res.json();

        setLocations(data.locations);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { locations };
};

export default useLocations;
