import { getComponentForType } from "@/services/getComponentForType";

export const PageRenderer = ({ sections }: { sections: any[] }) => {
  return (
    <>
      {sections.map((section, index) => {
        const { type, data } = section;
        const Component = getComponentForType(type);

        if (!Component) {
          console.warn(`Component not found for type: ${type}`);
          return null;
        }

        return <Component key={index} data={data} />;
      })}
    </>
  );
};
