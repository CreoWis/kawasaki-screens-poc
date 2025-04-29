import { PageRenderer } from "@/components/dynamic-renderer/PageRenderer";
import pageData from "../../content/pageData.json";

const Dealers = () => {
  return (
    <>
      <PageRenderer sections={pageData[1]?.dealerPage ?? []} />
    </>
  );
};

export default Dealers;
