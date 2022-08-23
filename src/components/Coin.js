import React from 'react';

//component
import styles from './Coin.module.css';

const Coin = ({image,name,price,symbol,marketCap,priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="image" className={styles.image} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol}</span>
            <span className={styles.currentPrice}>{price}</span>
            <span className={styles.marketCap}>{marketCap}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange}</span>
        </div>
    );
};

export default Coin;