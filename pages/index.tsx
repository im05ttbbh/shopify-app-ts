import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState } from "react";
import { SelectPayload } from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker";

const Index = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSelection = (resource: SelectPayload) => {
    setOpen(false);
    console.log(resource);
  };

  return (
    <Page
      title="Product selector"
      primaryAction={{
        content: "Select products",
        onAction: () => setOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={open}
        onCancel={() => setOpen(false)}
        onSelection={(resource) => handleSelection(resource)}
      />
    </Page>
  );
};

export default Index;
