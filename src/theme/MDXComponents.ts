// Import the original mapper
import Color from "@site/src/components/Color";
import MDXComponents from "@theme-original/MDXComponents";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import Admonition from "@theme/Admonition";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Admonition,
  Tabs,
  TabItem,
  Color,
};
