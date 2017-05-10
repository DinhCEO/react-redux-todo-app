import React from 'react'
import {Carousel} from 'react-bootstrap'


const images = [
    {
        src : 'dinhceo-1.jpg',
        description : 'Kỉ niệm Quảng Ninh'
    },
    {
        src : 'dinhceo-2.jpg',
        description : 'Kỉ niệm bãi tắm Quảng Ninh'
    },
    {
        src : 'dinhceo-3.jpg',
        description : 'Bố mẹ mình'
    },
    {
        src : 'dinhceo-4.jpg',
        description : 'Đám cưới'
    },
    {
        src : 'dinhceo-5.jpg',
        description : 'Đám cưới xếp Mười'
    },
    {
        src : 'dinhceo-6.jpg',
        description : 'Đôi bạn thân'
    },
    {
        src : 'dinhceo-7.jpg',
        description : 'Album ảnh cưới'
    },
    {
        src : 'dinhceo-8.jpg',
        description : 'Album ảnh cưới'
    },
    {
        src : 'dinhceo-9.jpg',
        description : 'Tất niên 2016'
    },
    {
        src : 'dinhceo-10.jpg',
        description : 'men lì :D'
    }
];
const style_div = {
    height : '500px',
    width  : '100%'
};

const style_carousel = {

};
const style_image = {
    width : '100%'
};

export default class CarouselDemo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={style_div} className="wrapper-carousel">
                <Carousel>
                    {images.map((item,index) => {
                        return (
                            <Carousel.Item style={style_carousel} key={index}>
                                <img style={style_image} key={index} src={`img/${item.src}`}
                                     className="full-width image-item-carousel"/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}