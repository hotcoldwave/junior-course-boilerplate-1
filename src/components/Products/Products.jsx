import React from 'react';
import ProductItem from 'csssr-school-product-card';
import './Products.css';

const Products = ({data}) => {

  const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && "starFill"} />;
  };

    return (
      <div className="products">
          {data.slice(0, 6).map((prod) => 
            <ProductItem 
            key = {prod.id}
            title={prod.name}
            isInStock={prod.inStock}
            img={prod.image}
            price={prod.price}
            subPriceContent={prod.subPriceContent}
            maxRating={prod.maxRating}
            rating={prod.rating}
            ratingComponent={ratingComponent}
            />
        )}
      </div>
    )
}

export default Products;


