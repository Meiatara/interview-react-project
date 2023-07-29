import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RetrieveFoods = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://interview-api.pilihjurusan.id/foods");
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchFoods();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map((item, index) => {
        return (
          <li key={index}>{item.name} Rp. {item.price}</li>
        );
      })}
    </div>
  );
};

export default RetrieveFoods;