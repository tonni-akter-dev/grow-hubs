import React from "react";
import { resource1, resource2, resource3 } from "../utils/data";
import ProductCard from "../home/components/ProductCard";


const ResourceMegaMenu = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div
                className="rounded-[30px] p-11 flex flex-col justify-center  mega-menu max-w-[1186px] mx-auto w-full bg-white "
                style={{
                    boxShadow: "0 7062px 250px 0 rgba(0, 0, 0, 0.00), 0 4520px 250px 0 rgba(0, 0, 0, 0.01), 0 2542px 250px 0 rgba(0, 0, 0, 0.05), 0 1130px 250px 0 rgba(0, 0, 0, 0.09), 0 282px 250px 0 rgba(0, 0, 0, 0.10)",
                }}>
                <div className="w-full  grid lg:grid-cols-3 grid-cols-1  gap-x-6">
                    <div className="text-neutral-10 text-body font-medium">
                       RESOURCES
                    </div>
                    <div className="text-neutral-10 text-body font-medium">
                        FOR PARTNERS
                    </div>
                    <div className="text-neutral-10 text-body font-medium">
                        GET SUPPORT
                    </div>
                </div>
                <ul className="w-full  grid lg:grid-cols-3 grid-cols-1  gap-x-6">
                    <div>
                        {resource1.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                    <div>
                        {resource2.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}

                    </div>
                    <div>
                        {resource3.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}

                    </div>
                </ul>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="product2_bg mt-7 py-6 ps-6 rounded-[20px]">
                        <h2 className="text-primary-2-50 text-h3 mb-[30px] font-semibold leading-[35px]">JOIN OUR COMMUNITY <br /> HUB. GROW WITH <br /> US.</h2>
                        <button className="text-primary-2-50 text-body px-6 py-3 rounded-[100px]" style={{ background: 'linear-gradient(214deg, #3F7DFF 20.22%, #2E9FE5 77.53%)' }}>Join For Free</button>
                    </div>   <div className="product3_bg mt-7 py-6 ps-6 rounded-[20px]">
                        <h2 className="text-primary-2-50 text-h3 mb-[30px] font-semibold leading-[35px]">START <br /> IMMEDIATELY <br /> EARNING  <br />REVENUE</h2>
                        <button className="text-primary-2-50 text-body px-6 py-3 rounded-[100px]" style={{ background: 'linear-gradient(214deg, #3F7DFF 20.22%, #2E9FE5 77.53%)' }}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceMegaMenu;