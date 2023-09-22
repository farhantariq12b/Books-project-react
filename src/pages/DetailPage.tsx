import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";

const DetailPage: React.FC<any> = () => {
    const arr = [
        'WordPress vs Webflow',
        'How to Block SPAM “bot-traffic” in GA',
        '10 Best Business Plan Software',
        'WordPress vs Webflow',
        'How to Block SPAM “bot-traffic” in GA',
        '10 Best Business Plan Software',
        'WordPress vs Webflow',
        'How to Block SPAM “bot-traffic” in GA',
        '10 Best Business Plan Software'
      ];
     
      const { id=0 } = useParams();
      const productBlog = arr?.find((blog, idx) => idx === +id);

  return (
    <div className="container mt-4">
      <div className="border-bottom">
        <h1 className="text-danger">
    {productBlog}
        </h1>
      </div>
      <div className="mt-3">
      hi, this is me Rana Subhan
      </div>
     
    </div>
  );
};

export default DetailPage;
