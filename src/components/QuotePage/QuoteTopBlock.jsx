import React from "react";
import QuoteForm from "./QuoteForm";

const QuoteTopBlock = () => {
  return (
    <section className="quote-top-section">
      <div className="el-container">
        <div className="sub-title">Offerte aanvraag</div>
        <div className="title">Heeft u een vraag? Laten we contact opnemen</div>
        <div className="quote-section">
          <div className="bg-image">
            <img src="/assets/images/background.png" alt="Office background" />
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default QuoteTopBlock;
