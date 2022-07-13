import { useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import type { IMyChat } from 'api/chat';
import { useMyChat } from 'api/chat';

const MyPage: NextPage = () => {
  const myData = useMyChat();

  useEffect(() => {
    const myFnc = (p: IMyChat) => {
      return p;
    };
  }, []);

  return <></>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default MyPage;
