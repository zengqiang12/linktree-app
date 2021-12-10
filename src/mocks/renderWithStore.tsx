import { Provider } from 'react-redux';
import { RootState } from 'types/RootState';
import { mockInitialStore } from './store';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

const mockStore = configureStore();

export const renderWithStore = (
  component: JSX.Element,
  state: RootState = mockInitialStore,
) => render(<Provider store={mockStore(state)}>{component}</Provider>);
