import { string } from 'prop-types';

import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {
  const { isLoading, images } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && (<h2>Loading...</h2>) }
      <div className="card-grid">
        { images.map((image) => <GifItem key={ image.id } { ...image }/>) }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: string.isRequired,
};
