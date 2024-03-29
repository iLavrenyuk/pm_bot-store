import axios from 'axios';
import React, { useEffect, useState } from 'react';
import defaultProducts from './data/defaultProducts';
import { Button } from './components/Button';
import { CatalogItem } from './components/CatalogItem';

export const App = () => {
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const [counterClicks, setCounterClicks] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get('https://sheet.best/api/sheets/1d7992df-3040-4d5f-9704-73ea7e482e55!');
      setData(res.data);
      setApiError(null);
    } catch (error) {
      setApiError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLightTheme(window.Telegram.WebApp.colorScheme === 'light');
    getData();
  }, []);
  console.log('window.Telegram =>>>> ', window.Telegram);

  window.Telegram.WebApp.MainButton.onClick(() => setCounterClicks(counterClicks + 1));

  return (
    <div className={`${isLightTheme ? 'light' : 'dark'}`}>
      <div className="text-slate-800 dark:text-white min-h-2/3">
        <div className="flex flex-col items-center">
          <Button onClick={() => navigator.clipboard.writeText(JSON.stringify(window.Telegram))}>COPY tg data</Button>
          <Button onClick={window.Telegram.WebApp.MainButton.show}>show()</Button>
          <Button onClick={window.Telegram.WebApp.MainButton.hide}>hide()</Button>
          <Button onClick={window.Telegram.WebApp.MainButton.enable}>enable()</Button>
          <Button onClick={window.Telegram.WebApp.MainButton.disable}>disable()</Button>
          <a href="https://telegra.ph/Organy-dyhaniya-04-25">telegraph</a>
          {counterClicks ? <span className="font-bold text-3xl">{counterClicks}</span> : null}
        </div>
        {isLoading ? (
          <div className="flex justify-center pt-20">
            <svg className="animate-spin h-1/3 w-1/3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : apiError ? (
          <div className="flex flex-col items-center text-center pt-20">
            <span className="font-bold text-3xl">Error 404</span>
            <span className="font-bold text-xl">Something went wrong</span>
            <Button
              onClick={() => {
                setData(defaultProducts);
                setApiError(null);
              }}
            >
              Display mock data
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
            {data?.map((product) => (
              <CatalogItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
