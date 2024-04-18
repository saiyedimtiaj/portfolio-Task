import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonial({ filteredTestimonials }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div id="testimonial" className="container mx-auto px-3 min-h-screen">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mt-8 mb-7">CLIENT REVIEW</h1>
            <div>
                <Carousel
                    additionalTransfrom={0}
                    infinite
                    itemClass="item"
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    centerMode={false}
                    responsive={responsive}
                >
                    {filteredTestimonials?.map((item) => (
                        <div className="flex flex-col items-center justify-between" key={item?._id}>
                            <img className="w-40 h-40 rounded-full object-cover" src={item?.image?.url} alt="" />
                            <h3 className="text-2xl font-bold mt-4">{item?.name}</h3>
                            <p className="text-xl font-medium mt-2">{item?.position}</p>
                            <p className="max-w-[600px] mt-4 text-center font-medium text-gray-600">{item?.review}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonial;
