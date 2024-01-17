import { useState, useEffect } from 'react';

interface HouseData {
  checkList: { customerName: string }[];
  picture: string | null;
  houseName: string;
}

export default function useHouseData() {
  const [houseData, setHouseData] = useState<HouseData | null>(null);

  useEffect(() => {
    async function fetchHouseData() {
      try {
        const response = await fetch('http://localhost:8080/house/showHouse/2cdf13e7-3dc0-49e8-963a-949ae012df9a');
        const data: HouseData = await response.json();
        setHouseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setHouseData(null);
      }
    }

    fetchHouseData();
  }, []);

  return houseData;
}
