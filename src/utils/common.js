export const saveLocalData = (id, token) => {
  localStorage.setItem("ID", id);
  localStorage.setItem("Token", token);
};

export const getLocalData = () => {
  const data = {
    getId: localStorage.getItem("ID"),
    getToken: localStorage.getItem("Token"),
  };
  return data;
};

export const clearLocalData = () => {
  localStorage.clear();
};

export const checkToken = () => {
  const checkData = getLocalData();
  if (checkData.getId !== null && checkData.getToken !== null) return true;
  else return false;
};
