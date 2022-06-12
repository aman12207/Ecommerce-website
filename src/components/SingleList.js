import React,{useCallback, useEffect, useState} from 'react'
import { useGlobalContext } from '../context'
import {useParams} from "react-router-dom";
import axios from "axios";

const SingleList = () => {
  const {selectedItem, setSelectedItem} = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const {id}= useParams();
  const fetchProductDetail = useCallback(async () => {
    setLoading(true);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      setSelectedItem(response.data);
      setLoading(false);
  },[id]);
  useEffect(()=>{
    fetchProductDetail();
  },[id])
  const { image, title, price, category, description } = selectedItem;
  if(loading){
    return<h2>Loading...</h2>
  }
  return (
  <div className='ui grid container'>
    <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleList