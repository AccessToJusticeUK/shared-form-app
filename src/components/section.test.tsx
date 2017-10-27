import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Section, ISectionProps } from "./section";
import "../setupTests";

describe("Section ", () => {
    let visibleSectionProps : ISectionProps = {
        isVisible: true,
        innerHTML: "Section text"
    };

    let invisibleSectionProps : ISectionProps = {
        isVisible: false,
        innerHTML: "Section text"
    };

    let wrapper : ShallowWrapper<ISectionProps, any>;

    it("renders a div with innerHTML and isVisible properties", () => {
        wrapper = shallow(<Section {...visibleSectionProps}/>);
        expect(wrapper.contains(<div style={{}}>Section text</div>)).toBe(true);
    });

    it("changes display property to none", () => {
        wrapper = shallow(<Section {...invisibleSectionProps}/>);
        const style = wrapper.find('div').props().style;
        const display = style && style.display;
        expect(display).toEqual('none');
    });
});
