var hoistNonReactStatics = require('hoist-non-react-statics');

function getDisplayName(Wrapped) {
  return Wrapped.displayName || Wrapped.name || 'Component';
}

module.exports = function wrapComponent(createWrap) {
  return function(Wrapped) {
    var Wrap = createWrap(Wrapped)
    Wrap.displayName = Wrap.constructor.name + getDisplayName(Wrapped);
    Wrap.WrappedComponent = Wrapped;
    return hoistNonReactStatics(Wrap, Wrapped)
  }
}
