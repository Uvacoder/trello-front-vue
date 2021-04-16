import { mount } from "@vue/test-utils";
import TButton from "@/components/TButton.vue";

describe("TButton", () => {
  test("Is a Vue instance", () => {
    const wrapper = mount(TButton);
    expect(wrapper.vm).toBeTruthy();
  });

  test("Click button emit event", async () => {
    const wrapper = mount(TButton);
    wrapper.vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test("Passing prop title", () => {
    const wrapper = mount(TButton, {
      propsData: {
        title: "MyButton"
      }
    });

    expect(wrapper.props().title).toBe("MyButton");
  });

  test("Passing prop textTransform initial print in span", () => {
    const wrapper = mount(TButton, {
      propsData: {
        title: "MyButton",
        textTransform: "initial"
      }
    });

    let span = wrapper.find("span");
    expect(span.text()).toBe("MyButton");
  });

  test("Not passing prop title span isn't visible", async () => {
    const wrapper = mount(TButton);
    await wrapper.setProps({ title: "" });

    let span = wrapper.find("span");
    expect(span.exists()).toBe(false);
  });

  test("Not passing prop title span is visible", async () => {
    const wrapper = mount(TButton);
    await wrapper.setProps({ title: "button" });

    let span = wrapper.find("span");
    expect(span.exists()).toBe(true);
  });
});
