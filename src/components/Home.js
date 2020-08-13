import React from 'react'
import '../Home.css'
import Product from './Product'

function Home() {
    return (
        <div className={"home"}>
            <img
                className={"home_image"}
                src={"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"}
                alt={""}
            />
            <div className={'home_row'}>
                {/* Product Components */}
                {/* id, title, price, rating, image, addToBasket */}
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={119.99}
                    rating={3}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={119.99}
                    rating={5}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={100.99}
                    rating={2}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />                
            </div>
            <div className={'home_row'}>
                {/* Product Components */}
                {/* id, title, price, rating, image, addToBasket */}
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={119.99}
                    rating={3}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={119.99}
                    rating={5}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />
                <Product 
                    id={1}
                    name={"Samsung 23.5' curved monitor"}
                    price={100.99}
                    rating={2}
                    imageUrl={"https://m.media-amazon.com/images/I/41dYF-lTQ0L._AC_SL260_.jpg"}
                />                
            </div>
            
        </div>
    );
}

export default Home;
