var express = require("express");
var UserRoute = require("./../UserRoutes");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/", new UserRoute().routes);
            //app.use("/", new SpartanRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
})();
module.exports = BaseRoutes;
//# sourceMappingURL=Routes.js.map