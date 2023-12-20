import { string } from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  );
};

FirstApp.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
}

FirstApp.defaultProps = {
  title: 'No title',
  subtitle: 'No subtitle'
}
