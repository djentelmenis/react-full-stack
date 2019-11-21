import { configure, shallow, mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
const { expect } = chai;

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost:3000',
});

global.chai = chai;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.sinon = sinon;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.Image = class Image {
  onload() {}

  onerror() {}
};
