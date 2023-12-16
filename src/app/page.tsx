import MainPage from '@/components/MainPage'
import ProductsPage from '../components/ProductsPage/ProductsPage'
import { Box } from '@mui/material'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/FooterPage'
import CustomerReviews from '@/components/CustomerReviewsPage/CustomerReviewsPage'

export default function Home() {
  return (
    <Box height={'100%'} margin={0} bgcolor="#000">
      <MainPage />
      <ProductsPage />
      <AboutUs />
      <CustomerReviews />
      <Footer />
    </Box>
  )
}
