import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Filter from './filter';
import store from '../../redux/configureStore';

test('Countries test', () => {
  render(
    <Provider store={store}>
      <Filter />
    </Provider>,
  );

  const linkElement = screen.getByText(/Delete/i);
  expect(linkElement).toBeInTheDocument();
});
