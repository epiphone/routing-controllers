"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Registers an action to be executed when request with specified method comes on a given route.
 * Must be applied on a controller action.
 */
function Method(method, route) {
    return function (object, methodName) {
        index_1.getMetadataArgsStorage().actions.push({
            type: method,
            target: object.constructor,
            method: methodName,
            route: route
        });
    };
}
exports.Method = Method;

//# sourceMappingURL=Method.js.map
