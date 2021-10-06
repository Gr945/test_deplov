export const fetchInitOneProductSaga = async (productNum) => {
  const res = await fetch(`http://62.109.7.98/api/product/${productNum}`);
  const data = res.json();
  return data;
};
