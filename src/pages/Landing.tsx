import { PageRenderer } from "@/components/dynamic-renderer/PageRenderer";
import pageData from "../../content/pageData.json";

const Landing = () => {
  return (
    <>
      <PageRenderer sections={pageData[0]?.shopHomePage ?? []} />
    </>
  );
};

export default Landing;
