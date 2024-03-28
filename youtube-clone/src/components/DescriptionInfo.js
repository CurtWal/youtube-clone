import React from "react";

const DescriptionInfo = ({ description, published, viewCount }) => {
  const publishedDate = new Date(published);

  // Get month and date
  const month = publishedDate.toLocaleString("default", { month: "short" }); // Get full month name
  const date = publishedDate.getDate(); // Get day of the month
  const formatViewCount = (viewCount) => {
    if (viewCount < 1000) {
      return viewCount.toString(); // Return as it is for counts less than 1000
    } else if (viewCount < 1000000) {
      return Math.floor(viewCount / 1000) + "k"; // Convert to thousands (e.g., 752,659 -> "752k")
    } else if (viewCount < 1000000000) {
      return Math.floor(viewCount / 1000000) + "m"; // Convert to millions (e.g., 7,526,590 -> "7m")
    } else {
      return Math.floor(viewCount / 1000000000) + "b"; // Convert to billions (e.g., 1,234,567,890 -> "1b")
    }
  };
  const formattedViewCount = formatViewCount(viewCount);

  // Format the date
  const formattedDate = `${month} ${date}`;
  return (
    <div>
      <hr style={{ width: "95%" }} />
      <p>
        {formattedViewCount} views {formattedDate}
      </p>
      <p>{description}</p>
      <hr style={{ width: "95%" }} />
    </div>
  );
};
export default DescriptionInfo;
