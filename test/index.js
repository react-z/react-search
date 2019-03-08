var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = (new JSDOM('')).window
global.window = window
global.document = window.document

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

require('./Search.spec.js');
