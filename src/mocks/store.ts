import { RootState } from 'types/RootState';

export const mockInitialStore: RootState = {
  weather: {
    loading: false,
    data: null,
    error: null,
  },
};
