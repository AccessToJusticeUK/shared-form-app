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

    let wrapper : ShallowWrapper;

    it("renders a div with innerHTML and isVisible properties", () => {
        wrapper = shallow(<Section {...visibleSectionProps}/>);
        expect(wrapper.contains(<div style={{}}>Section text</div>)).toBe(true);
    });

    it("changes display property to none", () => {
        wrapper = shallow(<Section {...invisibleSectionProps}/>);
        let sectionProps : object = { style: { display: 'none' }, children: 'Section text' };
        expect(wrapper.props()).toEqual(sectionProps);
    });
});
