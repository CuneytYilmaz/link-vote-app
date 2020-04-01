import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import AddLinkContainer from '../containers/AddLinkContainer';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <AddLinkContainer/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});