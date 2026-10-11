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
 * Write the sprite description here.
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
 * Initializes the sprite and its animations.
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
 * Defines the sprite's animations. Add animation sequences here.
 *
 * @returns {undefined}
 * @private
 */
%APP%.%PACKAGE%.%CLASS%.prototype.m_initAnimation = function() {
};
