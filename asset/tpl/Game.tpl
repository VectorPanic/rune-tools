//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates the application's initial game scene.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Displays a centered Hello World text field as a starting point for gameplay.
 */
%APP%.scene.Game = function() {

    //--------------------------------------------------------------------------
    // Private properties
    //--------------------------------------------------------------------------

    /**
     * The scene's Hello World text field.
     *
     * @type {rune.text.BitmapField}
     * @private
     */
    this.m_text = null;

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

%APP%.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
%APP%.scene.Game.prototype.constructor = %APP%.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * Initializes the scene and adds the centered Hello World text field.
 *
 * @override
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    
    this.m_text = new rune.text.BitmapField("Hello World!");
    this.m_text.autoSize = true;
    this.m_text.center = this.application.screen.center;
    
    this.stage.addChild(this.m_text);
};

/**
 * Updates the scene each tick. Add game logic here.
 *
 * @override
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
};

/**
 * Releases the scene's resources and clears its text field reference.
 *
 * @override
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
    this.m_text = null;
};
