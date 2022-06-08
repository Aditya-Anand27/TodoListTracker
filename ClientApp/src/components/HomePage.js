/* eslint-disable */ 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var agent_1 = require("./agents/agent");
function HomePage() {
    var _a = (0, react_1.useState)(0), get1 = _a[0], setget = _a[1];
    function callYourAPI() {
        setget([agent_1.default.Activities.list()]);
    }
    ;
    return (react_1.default.createElement("div", { className: "Hello" },
        react_1.default.createElement("button", { onClick: callYourAPI }, "GET"),
        get1));
}
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map