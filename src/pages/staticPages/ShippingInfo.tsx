import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShippingInfo = () => {
    return (
        <section className="pageMain statickPageDesign">
        <div className="container">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Store-locator</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="contentPageWrapper">
                <h1 className="mb-4"><strong>SHIPPING</strong></h1>
                <div className="">
                    <p>
                        At VESIMI, we are proud to offer shipping to over 200 countries across the globe.
                        Skycom, hassle-free delivery to your doorstep. The duty rates and other taxes shall
                        be added to the price of the outfits during the check-in process.
                    </p>
                    <p>
                        VESIMI, www.vesimi.com, will NOT deal or provide any services or products to any of
                        OFAC sanctioned countries.
                    </p>
                    <p>
                        Before we can dispatch your purchases, we may need to confirm your details with your
                        card issuer. We will do our best to keep delays to a minimum. Our delivery time starts
                        from the moment an order is accepted and includes a 24-hour period where your items
                        will be processed and dispatched by our warehouse.
                    </p>
                    <p>
                        Please note this can take longer during our sale periods when it may take up to 48
                        hours for shipments to be dispatched. We work closely with our shipping partner to
                        minimize the potential impact of custom delays on our international customers.
                    </p>
                    <p>
                        Products purchased from Vesimi will take 6 to 7 working days to ship to you. In
                        certain cases, if that's not possible, Vesimi will let you know beforehand.
                    </p>

                    {/* Company Address */}
                    <h5 className="mt-4"><strong>VESIMI FASHIONS INDIA Pvt Ltd.</strong></h5>
                    <p>
                        504, 5th floor, Simran Plaza, <br />
                        Junction of 3rd & 4th Road, <br />
                        Next to Regal Enclave, <br />
                        Khar West, Mumbai - 52, India
                    </p>
                    <p>
                        <strong>Contact:</strong> 022 61276691 / 92 / 93 / 94
                    </p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ShippingInfo;
