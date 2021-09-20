import React from 'react';
import toJson from 'enzyme-to-json';
import {configure, shallow} from 'enzyme';
import {Provider} from "react-redux";
import store from "../src/store";
import Header from "../src/Components/Header";
import Main from "../src/Components/Main";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe('App Component', () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header/>
        <Main/>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});