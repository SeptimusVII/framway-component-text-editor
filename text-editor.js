module.exports = function(app){
    var TextEditor = Object.getPrototypeOf(app).TextEditor = new app.Component("text-editor");
    //TextEditor.debug = true;
    TextEditor.createdAt      = "2.0.0";
    TextEditor.lastUpdate     = "2.0.0";
    TextEditor.version        = "1";
    // TextEditor.factoryExclude = true;
    // TextEditor.loadingMsg     = "This message will display in the console when component will be loaded.";
    // TextEditor.requires       = [];

    // TextEditor.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return TextEditor;
}