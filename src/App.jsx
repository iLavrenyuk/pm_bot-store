import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://sheet.best/api/sheets/e1cd0f2b-00db-46f4-89d9-888da2c874a9');
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('window.Telegram =>>>> ', window.Telegram);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
      {data?.map((product) => (
        <div className="flex flex-col justify-center items-center text-sm" key={product.id}>
          <img className="max-h-20" src={product.image} alt="" />
          <span className="text-xs">
            {product.name} · ${product.price}
          </span>
          <button className="mt-1 px-4 py-0.5 bg-amber-400 text-white font-bold rounded-md">ADD</button>
        </div>
      ))}
    </div>
  );
};
