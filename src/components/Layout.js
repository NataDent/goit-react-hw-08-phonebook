import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Box, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box py={2}>
      <Header />
      <Suspense fallback={<Text color="brand.900">Loading...</Text>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
