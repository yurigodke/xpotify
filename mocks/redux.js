import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];

const initialState = {
  track: {
    item: {},
    list: {}
  }
};

class wrapperRedux {
  constructor(element, reduxState = {}) {
    const mockStore = configureStore(middlewares);
    const storeData = { ...initialState, ...reduxState };
    const store = mockStore(storeData);

    this.mountedElement = mount(<Provider store={store}>{element}</Provider>);
  }

  getBaseElement() {
    return this.mountedElement.children().children();
  }

  update() {
    this.mountedElement.update();
  }

  unmount() {
    this.mountedElement.unmount();
  }

  updateStore(reduxState) {
    const mockStore = configureStore(middlewares);
    const storeData = { ...initialState, ...reduxState };
    const store = mockStore(storeData);

    this.mountedElement.setProps({
      store
    });
  }
}

export default wrapperRedux;
