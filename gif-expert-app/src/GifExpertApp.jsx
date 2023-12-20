import { useState } from 'react';

import { AddCategory } from './components/AddCategory.jsx';
import { GifGrid } from './components/GifGrid.jsx';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={ onAddCategory }/>
      {
        categories.map((category) =>
          <GifGrid key={ category } category={ category }/>
        )
      }
    </>
  );
};
