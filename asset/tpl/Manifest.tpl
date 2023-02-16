//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * The application namespace.
 * 
 * @namespace %APP%
 */
var %APP% = function() {

    //--------------------------------------------------------------------------
    // Public static scope
    //--------------------------------------------------------------------------
    
    /**
     * Public scope.
     *
     * @type {Object}
     * @private
     */
    var m_this = {};

    //--------------------------------------------------------------------------
    // Package structure
    //--------------------------------------------------------------------------
    
    /**
     * This package contains classes that represent data, or that are used to 
     * manage data. Data can consist of concrete information, or of raw data 
     * such as resource files.
     *
     * @namespace data
     * @memberof %APP%
     * @since 1.0
     */
    m_this.data = {};
    
    /**
     * This package includes the scenes that make up the application. Scenes 
     * are used to represent graphical parts (also known as views) of an 
     * application.
     *
     * @namespace scene
     * @memberof %APP%
     * @since 1.0
     */
    m_this.scene = {};

    /**
     * This package contains the application's most vital classes.
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
     * Public scope.
     */
    return m_this;
}();

//------------------------------------------------------------------------------
// Public static methods
//------------------------------------------------------------------------------

/**
 * The secret bootstrap. This method enables simple startup of the application, 
 * without knowledge of the internal package structure or the classes included 
 * in it.
 *
 * @ignore
 */
%APP%.bootstrap = function(callback) {
    var app = new %APP%.system.Main();
        app.start(callback);
        
    return app;
};