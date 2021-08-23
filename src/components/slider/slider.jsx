import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {

var arr2 = [
    {link:"https://evpowered.co.uk/wp-content/uploads/2020/01/Model-3-Interior-Rear-Seat-Blue-Sky-1024x576.png"},
    {link:"https://m.atcdn.co.uk/vms/media/w900/5072396288294f4a882d011675d0cd71.jpg"},
    {link:"https://article.images.consumerreports.org/prod/content/dam/cro/news_articles/cars/CR-Cars-Inline-Tesla-Model-X-Right-Doors-05-16"},
    {link:"https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2016/06/hero-01-lhd-e1467284962593.jpg?resize=1600%2C1000&quality=82&strip=all&ssl=1"},
    {link:"https://cleantechnica.com/files/2018/10/tesla-version-9-autopilot-full-360-blind-spot-nope.png"},
    {link:"https://mk0knowtechiec1j578p.kinstacdn.com/wp-content/uploads/2019/04/image-15.jpg"},
    {link:"https://c2.staticflickr.com/6/5501/11975429326_2718200143_b.jpg"},
    {link:"https://th.bing.com/th/id/OIP.1Cdx-YXczzSXFIoczUqAbgHaFj?pid=ImgDet&rs=1"},
]




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // arrows:true,
      };
    
    return (
        // dom html tags /components reacts components

 <div className="p-5">
             <Slider arrows={true} {...settings}>
         {
             arr2.map(data=>{

                return ( <div>
                    <img className="slider-image-team" src={data.link} alt="" />
                          </div>)
             })
         }
         
          
        </Slider>
        </div>
    )
}