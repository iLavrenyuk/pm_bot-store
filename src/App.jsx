import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get('https://sheet.best/api/sheets/e1cd0f2b-00db-46f4-89d9-888da2c874a9');
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('window.Telegram =>>>> ', window.Telegram);

  return isLoading ? (
    <div className="flex justify-center h-screen pt-20">
      <svg className="animate-spin h-1/3 w-1/3 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  ) : (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 text-white h-screen">
      {data?.map((product) => (
        <div className="flex flex-col justify-center items-center" key={product.id}>
          <img className="max-h-28" src={product.image} alt="" />
          <span className="text-sm">
            {product.name} · ${product.price}
          </span>
          <button className="mt-1 px-6 py-1 bg-amber-400 font-bold rounded-md">ADD</button>
        </div>
      ))}
    </div>
  );
};
