//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new instance of the Main class.
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Entry point class.
 */
%APP%.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend (Rune) Application.
     */
    rune.system.Application.call(this, {
        developer: "%DEVELOPER%",
        app: "%APP%",
        build: "%BUILD%",
        scene: %APP%.scene.Game,
        resources: %APP%.data.Requests,
        useGamepads:true,
        useKeyboard:true,
        framerate: 30,
        debug: true
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

%APP%.system.Main.prototype = Object.create(rune.system.Application.prototype);
%APP%.system.Main.prototype.constructor = %APP%.system.Main;