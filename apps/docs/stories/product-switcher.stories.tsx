import type { Meta, StoryObj } from "@storybook/react";
import { ProductSwitcher } from "@text/product-switcher";

const meta: Meta<typeof ProductSwitcher> = {
  component: ProductSwitcher,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductSwitcher>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <ProductSwitcher
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello
    </ProductSwitcher>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
