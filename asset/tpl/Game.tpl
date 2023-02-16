//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game scene.
 */
%APP%.scene.Game = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Calls the constructor method of the super class.
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
 * This method is automatically executed once after the scene is instantiated. 
 * The method is used to create objects to be used within the scene.
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    
    var text = new rune.text.BitmapField("Hello World!");
    text.autoSize = true;
    text.center = this.application.screen.center;
    
    this.stage.addChild(text);
};

/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
};

/**
 * This method is automatically called once just before the scene ends. Use 
 * the method to reset references and remove objects that no longer need to 
 * exist when the scene is destroyed. The process is performed in order to 
 * avoid memory leaks.
 *
 * @returns {undefined}
 */
%APP%.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};