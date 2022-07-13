import type { IPaginationQueryParams } from 'types';

export interface IMyChat {
  variable: string;
}

const iAmTheFnc = async (items?: IPaginationQueryParams): Promise<IMyChat> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ variable: '10' });
    }, 1000);
  });
};

export const useMyChat = (): Promise<IMyChat> => {
  const variable = iAmTheFnc();

  return variable;
};
