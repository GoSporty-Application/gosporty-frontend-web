import React, { createContext, useState } from 'react';

export const FieldContext = createContext();

export const FieldProvider = ({ children }) => {
  const [fieldData, setFieldData] = useState([]);

  const updateFieldData = (updatedData) => {
    setFieldData((prevData) => {
      const newData = prevData.map((item) => {
        if (item.id === updatedData.id) {
          return {
            ...item,
            ...updatedData
          };
        }
        return item;
      });
      return newData;
    });
  };

  return (
    <FieldContext.Provider value={{ fieldData, updateFieldData }}>
      {children}
    </FieldContext.Provider>
  );
};
