(() => {
  const datos = [
    {
      id: 1,
      year: 2008,
      title: "iron man",
    },
  ];
  const getDatos = () => {
    setTimeout(() => {
      return datos;
    }, 4500);
  };
  getDatos();
})();
