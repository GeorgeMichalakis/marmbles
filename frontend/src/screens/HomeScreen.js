import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
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
      <Row className='py-3'>
        <Col>
        <img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png" style="width:50px;height:50px;"></img>
        <Link to='./Marmbles'>Marmbles</Link>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
