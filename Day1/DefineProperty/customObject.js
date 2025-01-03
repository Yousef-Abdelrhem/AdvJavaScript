obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    (function () {
      for (var key in this) {
        if (typeof this[key] !== "function") {
          Object.defineProperty(this, key, {
            get: function () {
              return this[key];
            },
            set: function (val) {
              this[key] = val;
            },
          });
        }
      }
    })();
  },
};

obj.id = "new-id";
console.log(obj.id);

var user = { name: "Ali", age: 10 };

obj.getSetGen.call(user);
user.name = "joe";

console.log(user.name);
