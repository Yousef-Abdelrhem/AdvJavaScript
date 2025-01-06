obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    var self = this;

    for (var key in this) {
      (function () {
        var val = self[key];

        if (typeof self[key] !== "function") {
          Object.defineProperty(self, key, {
            get: function () {
              return val;
            },
            set: function (val) {
              val = val;
            },
          });
        }
      })();
    }
  },
};

obj.id = "new-id";
console.log(obj.id);

var user = { name: "Ali", age: 10 };

obj.getSetGen.call(user);
user.name = "joe";

console.log(user.name);
