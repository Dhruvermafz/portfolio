import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} . Dhruvermafz`}</title>
    </Helmet>
  );
};

export default MetaData;
