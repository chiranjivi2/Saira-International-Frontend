import Bank from "../features/visaInfo/Bank";

import VisaDetails from "../features/visaInfo/VisaDetails";
import Banner from "../ui/Banner";

function VisaInfo() {
  return (
    <>
      <title>Visa Info Page</title>
      <meta
        name="description"
        content="This is the Visa Information page of Saira International Education and Consultancy website"
      />
      <Banner page="Visa Info" />

      <Bank />

      <VisaDetails />
    </>
  );
}

export default VisaInfo;
