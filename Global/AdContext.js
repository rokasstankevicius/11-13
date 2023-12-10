import React, { createContext, useContext, useState } from 'react';

const AdContext = createContext();

export const useAdContext = () => {
  return useContext(AdContext);
};

export const AdProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: '1', title: 'Item 1', description: 'Description 1', price: '10.99' },
    { id: '2', title: 'Item 2', description: 'Description 2', price: '19.99' },
    { id: '3', title: 'Item 3', description: 'Description 3', price: '14.99' },
  ]);

  const handleAddItem = newItem => {
    setData([...data, newItem]);
  };

  const handleDeleteItem = itemId => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
  };

  const handleUpdateItem = (itemId, updatedValues) => {
    const updatedData = data.map(item =>
      item.id === itemId ? { ...item, ...updatedValues } : item
    );
    setData(updatedData);
  };

  return (
    <AdContext.Provider value={{ data, handleAddItem, handleDeleteItem, handleUpdateItem }}>
      {children}
    </AdContext.Provider>
  );
};