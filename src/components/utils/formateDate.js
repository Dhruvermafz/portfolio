import siteMetadata from "./siteMetadataa";
const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);

  return now;
};

export default formatDate;
