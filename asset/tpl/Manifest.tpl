//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * Defines the application namespace and its data, scene and system packages.
 * 
 * @namespace %APP%
 */
var %APP% = function() {

    //--------------------------------------------------------------------------
    // Public static scope
    //--------------------------------------------------------------------------
    
    /**
     * Collects the packages exposed by the application namespace.
     *
     * @type {Object}
     * @private
     */
    var m_this = {};

    //--------------------------------------------------------------------------
    // Package structure
    //--------------------------------------------------------------------------
    
    /**
     * Contains application data and resource registration classes.
     *
     * @namespace data
     * @memberof %APP%
     * @since 1.0
     */
    m_this.data = {};
    
    /**
     * Contains scenes that define the application's views and game logic.
     *
     * @namespace scene
     * @memberof %APP%
     * @since 1.0
     */
    m_this.scene = {};

    /**
     * Contains the entry point and other application-level classes.
     *
     * @namespace system
     * @memberof %APP%
     * @since 1.0
     */
    m_this.system = {};
    
    //--------------------------------------------------------------------------
    // Return public scope object
    //--------------------------------------------------------------------------

    /**
     * Exposes the assembled application namespace.
     */
    return m_this;
}();

//------------------------------------------------------------------------------
// Public static methods
//------------------------------------------------------------------------------

/**
 * Creates and starts the application, then returns its entry point instance.
 *
 * @param {Function} [callback] Called when application startup is complete.
 * @returns {%APP%.system.Main} The application instance being started.
 *
 * @ignore
 */
%APP%.bootstrap = function(callback) {
    var app = new %APP%.system.Main();
        app.start(callback);
        
    return app;
};
