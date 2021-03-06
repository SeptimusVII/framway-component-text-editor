module.exports = function(app){
    var pell = require('pell');
    var TextEditor = Object.getPrototypeOf(app).TextEditor = new app.Component("text-editor");
    // TextEditor.debug = true;
    TextEditor.createdAt      = "2.0.0";
    TextEditor.lastUpdate     = "2.0.0";
    TextEditor.version        = "1";
    // TextEditor.factoryExclude = true;
    // TextEditor.loadingMsg     = "This message will display in the console when component will be loaded.";
    // TextEditor.requires       = [];

    TextEditor.prototype.onCreate = function(){
        var editor = this;
        editor.$el.wrap('<div class="text-editor__wrapper"></div>');
        editor.$input = $('<div class="text-editor__input"></div>').insertAfter(editor.$el);
        editor.pell = pell.init({
            element: editor.$input[0],
            onChange: function(html){
                editor.$el.val(html);
            },
            classes:{
            // actionbar: 'pell-actionbar',
            // button: 'pell-button',
            // content: 'pell-content',
            // selected: 'pell-button-selected'
            },
            defaultParagraphSeparator: 'p',
            actions:[
                'bold',
                'italic',
                'underline',
                {
                    name: 'olist',
                    icon: '<i class="fas fa-list-ol"></i>',
                },
                {
                    name: 'ulist',
                    icon: '<i class="fas fa-list-ul"></i>',
                },
                'line',
                {
                    name: 'link',
                    icon: '<i class="fas fa-link"></i>',
                    result: () => {
                        var url = window.prompt('Indiquez l\'URL du lien');
                        var text = document.getSelection();
                        if (url) {
                            var target = window.confirm('Ouvrir le lien dans une autre fenêtre ?');
                            if (!url.match(/^http:\/\/|^https:\/\//))
                                url = 'http://'+url;
                            target ? document.execCommand('insertHTML', false, '<a target="_blank" href="' + url + '">' + text + '</a>') : document.execCommand('createLink', false, url);
                        }
                    }
                },
            ],
        });
        editor.$el.on('change keyup',function(){
            editor.pell.content.innerHTML = editor.$el.val();
        }).trigger('change');
    }
    return TextEditor;
}