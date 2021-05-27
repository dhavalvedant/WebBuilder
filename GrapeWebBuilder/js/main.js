

const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#editor',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
  
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: {
      id: 'gjs-',             // Prefix identifier that will be used on parameters
      type: 'local',          // Type of the storage
      autosave: true,         // Store data automatically
      autoload: true,         // Autoload stored data on init
      stepsBeforeSave: 10,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
    },
    plugins:["gjs-preset-webpage"],
    pluginsOpts:{
        "gjs-preset-webpage":{}
    }
  
  });

  