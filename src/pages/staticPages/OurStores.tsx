import React from "react";
import StoreImage from '../../assets/images/store.jpeg'

const StoreInfo = () => {
    return (
        <section className="pageMain statickPageDesign">
        <div className="container">
            {/* Breadcrumb navigation */}
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
            <div className="contentPageWrapper aboutUSPage">
                {/* Image Section */}
                
                    <img
                        src={StoreImage}
                        alt="Store display"
                        className="img-fluid rounded mb-4"
                    />
              

                {/* Store Address Section */}
              
                    <h4><strong>Store Address:</strong></h4>
                    <p>
                        VESIMI, 105 & 106, 1st Floor, Citadel Tower - Dubai
                    </p>
                    <p>
                        <strong>Phone:</strong> <a href="tel:+971526929312">+971 52 692 9312</a>
                    </p>
                    <p>
                        For all other queries, please email our customer care team at:
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:support@vesimi.com">support@vesimi.com</a>
                    </p>
                </div>

                {/* Google Map Section */}
                <div className="col-md-12 mt-4">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0501776857194!2d55.26887207465802!3d25.184469234971054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6839932a99d1%3A0x7e8fdbb8883f48b7!2sVESIMI!5e0!3m2!1sen!2sae!4v1619262748765!5m2!1sen!2sae"
                        width="100%"
                        height="400"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        
        </section>
    );
};

export default StoreInfo;
