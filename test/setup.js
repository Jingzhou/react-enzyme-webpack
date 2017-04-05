/**
 * Created by Administrator on 2017/4/5 0005.
 */
import jsdom from 'jsdom';
if (typeof document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
}
