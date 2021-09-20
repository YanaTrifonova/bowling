import Enzyme, { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });