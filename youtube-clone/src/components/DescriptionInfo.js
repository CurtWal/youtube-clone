import React, { Component } from 'react'
import pic from "../Assets/Bulbasaur.png";
const DescriptionInfo = ({description, published}) => {
  const publishedDate = new Date(published);

  // Get month and date
  const month = publishedDate.toLocaleString('default', { month: 'short' }); // Get full month name
  const date = publishedDate.getDate(); // Get day of the month

  // Format the date
  const formattedDate = `${month} ${date}`;
    return (
      <div>
        <hr style={{width: "95%"}}/>
        <p>200 views  {formattedDate}</p>
        <p>{description}</p>
        <hr style={{width: "95%"}}/>
      </div>
    )
  }
export default DescriptionInfo;