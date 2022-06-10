import { useState, useEffect } from "react";

type Checkbox = {
  id: number;
  name: string;
  address: string;
};
const useBrands = () => {
  const [brands, setBrands] = useState<Checkbox[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/brand/");
        const data = await res.json();

        setBrands(data.brands);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { brands };
};

export default useBrands;
