export const fetchInitProductsSaga = async (categoryNum) => {
  const res = await fetch(`http://62.109.7.98/api/product/category/${categoryNum}`);
  const data = res.json();
  return data;
};
