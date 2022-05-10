var myModule = (function () {
  "use strict";

  var _displayname = "Sam";

  var _privateMethod = function () {
    console.log("Name", _displayname);
  };
  return {
    _publicMethod: function () {
      _privateMethod();
    },
  };
})();

myModule._publicMethod();

export default myModule;
// console.log(myModule._displayname); // Is undefined protected by Module clouser
// myModule._privateMethod(); // TypeError protected by module clouser
