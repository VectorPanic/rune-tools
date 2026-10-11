//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates the application's entry point with its initial configuration.
 *
 * @constructor
 * @extends rune.system.Application
 * 
 * @class
 * @classdesc
 * 
 * Configures the initial scene, resources, input devices and game loop.
 */
%APP%.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Initializes the base Application class with this project's settings.
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
