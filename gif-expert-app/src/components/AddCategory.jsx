import { useState } from 'react';
import { func } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [category, setCategory] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setCategory(category.trim())

    if (category.length <= 1) return;

    onNewCategory(category);
    setCategory('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gif"
        value={ category }
        onChange={ (event) => setCategory(event.target.value) }/>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: func.isRequired,
};
