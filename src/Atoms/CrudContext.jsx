import React, { createContext,  useState } from "react";
const CrudContext = createContext(null);
const CrudProvider = ({ children }) => {
  const [crudData, setCrudData] = useState({
    create: 0,
    update: 0,
    deleted: 0,
  });

  const CrudCount = (create, update, deleted) => {
    setCrudData(() => ({
      create: create,
      update: update,
      deleted: deleted,
    }));
  };
  return (
    <CrudContext.Provider value={{ crudData, CrudCount }}>
      {children}
    </CrudContext.Provider>
  );
};

export { CrudContext, CrudProvider };