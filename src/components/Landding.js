import React,{useState,useEffect} from 'react';

//component
import { getCoin } from '../services/api';
import Coin from './Coin';
import styles from './Landding.module.css'
import Loading from './Loading';

const Landding = () => {

    const [coins,setCoins]=useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        const fetchAPI = async () => {
            const data= await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI();
    },[])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const coinSearch=coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input type="text" value={search} placeholder="Search" onChange={searchHandler} className={styles.input} />
           {
             coins.length ?   
             <div className={styles.coinContainer}> 
                {
                  coinSearch.map(coin => <Coin 
                    key={coin.id} 
                    image={coin.image}
                    name={coin.name} 
                    price={coin.current_price} 
                    symbol={coin.symbol} 
                    marketCap={coin.marketcap} 
                    priceChange={coin.price_change_percentage_24h} 
                    />)
                }
                </div>
                    :
                    <Loading />
            }
        
     </>
    );
};

export default Landding;