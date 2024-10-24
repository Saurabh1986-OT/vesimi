import React from "react";

const ReturnExchange = () => {
  return (
    <section className="pageMain statickPageDesign">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Returns and Exchange
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="contentPageWrapper faqPageDesign">
          <h4>
            Due to the current market situation and considering the health and
            safety standards, currently we are not accepting returns and
            exchanges.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ReturnExchange;
