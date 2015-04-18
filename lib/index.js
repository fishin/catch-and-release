var Hoek = require('hoek');
var Smelt = require('smelt');

var internals = {
    defaults: {}
};

module.exports = internals.CatchAndRelease = function (options) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);
    internals.CatchAndRelease.settings = settings;
    internals.settings = settings;
    this.packageCode = exports.packageCode;
};

exports.packageCode = function(name, path, dir) {

    var smelt = new Smelt({ dirPath: path });
    var packageCommand = 'tar cvfz ' + name + '.tar.gz ' + dir;
    var packageCommandResult = smelt.runCommand(packageCommand);
    return packageCommandResult;
};
