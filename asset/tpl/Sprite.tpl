//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new sprite instance.
 *
 * @constructor
 * @extends rune.display.Sprite
 *
 * @param {number} [x=0.0] The x coordinate of the sprite's top-left corner.
 * @param {number} [y=0.0] The y coordinate of the sprite's top-left corner.
 * @param {number} [width=0.0] The width of the sprite, in pixels.
 * @param {number} [height=0.0] The height of the sprite, in pixels.
 * @param {string} [resource=""] Name of the texture resource.
 * 
 * @class
 * @classdesc
 * 
 * Base sprite template. Replace this description with the sprite's purpose.
 */
%APP%.%PACKAGE%.%CLASS% = function(x, y, width, height, resource) {

    //--------------------------------------------------------------------------
    // Private properties
    //--------------------------------------------------------------------------
    
    /**
     * Example private property. Rename and describe it as needed.
     *
     * @type {boolean}
     * @private
     */
    this.m_something = false;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Initializes the base Sprite class.
     */
    rune.display.Sprite.call(this, x, y, width, height, resource);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

%APP%.%PACKAGE%.%CLASS%.prototype = Object.create(rune.display.Sprite.prototype);
%APP%.%PACKAGE%.%CLASS%.prototype.constructor = %APP%.%PACKAGE%.%CLASS%;

//------------------------------------------------------------------------------
// Override public prototype methods
//------------------------------------------------------------------------------

/**
 * Initializes the sprite and calls its animation setup method.
 *
 * @override
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.m_initAnimation();
};

/**
 * Updates the sprite each tick. Add sprite logic here.
 *
 * @override
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
};

/**
 * Releases resources when the sprite is destroyed. Clean up custom objects
 * and references here.
 *
 * @override
 * @returns {undefined}
 */
%APP%.%PACKAGE%.%CLASS%.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

//------------------------------------------------------------------------------
// Private prototype methods
//------------------------------------------------------------------------------

/**
 * Provides a setup hook for the sprite's animation sequences.
 *
 * @returns {undefined}
 * @private
 */
%APP%.%PACKAGE%.%CLASS%.prototype.m_initAnimation = function() {
};
