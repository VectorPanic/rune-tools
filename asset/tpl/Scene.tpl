//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new scene instance.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 *
 * Base scene template. Replace this description with the scene's purpose.
 */
%APP%.%PACKAGE%.%CLASS% = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * Initializes the base Scene class.
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

%APP%.%PACKAGE%.%CLASS%.prototype = Object.create(rune.scene.Scene.prototype);
%APP%.%PACKAGE%.%CLASS%.prototype.constructor = %APP%.%PACKAGE%.%CLASS%;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * Initializes the scene. Create and add scene objects here.
 *
 * @override
 *
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
};

/**
 * Updates the scene each tick. Add scene logic here.
 *
 * @override
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
};

/**
 * Releases resources when the scene is destroyed. Clean up custom objects
 * and references here.
 *
 * @override
 *
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
