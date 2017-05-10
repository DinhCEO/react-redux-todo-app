import React from 'react'
import Slick from 'react-slick'


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
const settings = {
    method : {},
    dots : true,
    infinite : true,
    speed : 300,
    arrows : true,
    adaptiveHeight : true,
    centerMode : false,
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    fade : true,
    responsive : [
        {
            breakpoint : 992,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1,
                arrow : false
            }
        },
        {
            breakpoint : 767,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1,
                arrow : false
            }
        }
    ]
};

const style = {
    width : 'auto',
    maxHeight : '400px'
};

export default class SlickClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link : 'img/'
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this)
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    render() {
        return (
            <div className="container">
                <div style={{textAlign : 'center', marginBottom : '50px'}}>
                    <button className='btn btn-default' onClick={this.previous}>Previous</button>
                    <button className='btn btn-default' onClick={this.next}>Next</button>
                </div>

                <Slick ref={c => this.slider = c } {...settings}>
                    {images.map((item, index) => {
                        return (
                            <div className="wrapper-image">
                                <img key={index} style={style} src={this.state.link + item.src}/>
                            </div>
                        )
                    })}
                </Slick>
            </div>

        )
    }
}