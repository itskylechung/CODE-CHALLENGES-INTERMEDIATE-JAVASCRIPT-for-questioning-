const yargs = require('yargs');

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder : {
        title : {
            describe : 'note title'
        }
    }
    handler : function() {
        console.log('adding a new note');
    }
})

yargs.command({
    command : "remove",
    describe : 'something it could be removed',
    handler : function(){
        
    }
})

yargs.command({
    command : 'add',
    describe : 'adding something cool',
    buider : {
        title : {
            describe : 'note title',
            demandOption : true,
            type : 'String'
        }
    }
    handler : function(argv) { 
        console.log(argv.title)
    }
})
