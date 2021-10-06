
export const fetchInitCategorySaga = async () => {
    const res = await fetch(`http://62.109.7.98/api/categories`);
    const data = res.json();
    return data;
  };
