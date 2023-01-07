import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div>
      {loading && <Loader />}
      <h1 align="center">Marbles Categories</h1>
      <Col className='py-3'>
        <Link to="./Marmbles">
          <Image src="https://res.cloudinary.com/dabw2e3sf/image/upload/v1673119000/general/carrara-white-marble-block-p560155-1b_q4vs8y.jpg" width={500} height={500} />
        </Link>
      </Col>
      <Col className='py-3'>
        <Link to="./Marmbles">
          <Image src="https://res.cloudinary.com/dabw2e3sf/image/upload/v1673117772/general/Polished-White-Onyx-Marble-Slabs-Kitchen-Countertops-Vanitytop-Worktop-Project-Bathroom_gnq8e1.jpg" width={500} height={500} />
        </Link>
      </Col>
    </div>
  )
}

export default HomeScreen
