import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box py={2}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
