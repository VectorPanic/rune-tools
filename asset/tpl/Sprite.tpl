//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new instance.
 *
 * @constructor
 * @extends rune.display.Sprite
 *
 * @param {number} [x=0.0] The x coordinate of the top-left corner of the rectangle.
 * @param {number} [y=0.0] The y coordinate of the top-left corner of the rectangle.
 * @param {number} [width=0.0] The width of the sprite, in pixels.
 * @param {number} [height=0.0] The height of the sprite, in pixels.
 * @param {string} [resource=""] Name of the resource to be used as texture data.
 * 
 * @class
 * @classdesc
 * 
 * Write description here
 */
%APP%.%PACKAGE%.%CLASS% = function(x, y, width, height, resource) {

    //--------------------------------------------------------------------------
    // Private properties
    //--------------------------------------------------------------------------
    
    /**
     * ...
     *
     * @type {rune.system.Config}
     * @private
     */
    this.m_something = false;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Sprite.
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
 * @override
 */
%APP%.%PACKAGE%.%CLASS%.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.m_initAnimation();
};

/**
 * @override
 */
%APP%.%PACKAGE%.%CLASS%.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
};

/**
 * @override
 */
%APP%.%PACKAGE%.%CLASS%.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

//------------------------------------------------------------------------------
// Private prototype methods
//------------------------------------------------------------------------------

/**
 * @returns {undefined}
 * @private
 */
%APP%.%PACKAGE%.%CLASS%.prototype.m_initAnimation = function() {
};
