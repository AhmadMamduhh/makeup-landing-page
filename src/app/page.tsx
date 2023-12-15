import MainPage from '@/components/MainPage'
import ProductsPage from '../components/ProductsPage'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box height={'100%'} margin={0} bgcolor="#000">
      <MainPage />
      <ProductsPage />
    </Box>
  )
}
