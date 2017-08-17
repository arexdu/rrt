import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        let imgalter = 'https://images-cn.ssl-images-amazon.com/images/I/510XCcQtq5L._SX303_BO1,204,203,200_.jpg';
        return (
            <div>
                {
                    this.props.items.map((item,index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a key={index}
                               className="book"
                               href={infoLink}
                               target="_blank"
                            >
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : imgalter}
                                     alt="book image"
                                     className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;