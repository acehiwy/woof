// Import the original mapper
import Color from "@site/src/components/Color";
import MDXComponents from "@theme-original/MDXComponents";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Tabs,
  TabItem,
  Color,
};
