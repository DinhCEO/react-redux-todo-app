/**
 *
 * @constructor
 */

const Container = function () {
};

/**
 *
 * @type {{FACTORY: string, SINGLETON: string}}
 */

const bindingType = {
    FACTORY : 'factory',
    SINGLETON : 'singleton'
};
/**
 *
 * @type {{}}
 */

Container.prototype.bindings = {};
/**
 *
 * @type {{}}
 */
Container.prototype.resolved = {};

/**
 *
 * @param dependency
 * @param factory
 */
Container.prototype.bind = function (dependency, factory) {
    this.bindings[dependency] = {
        factory : factory,
        type : bindingType.FACTORY
    }
};

/**
 *
 * @param dependency
 * @param factory
 */
Container.prototype.singleton = function (dependency, factory) {
    this.bindings[dependency] = {
        factory : factory,
        type : bindingType.SINGLETON
    }
};

Container.prototype.make = function (dependency) {
    if (!this.bindings[dependency]) {
        throw new Error(`Could not resolve dependency [${dependency}]`);
    }
};
