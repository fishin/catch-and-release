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

exports.packageCode = function (options, cb) {

    var smelt = new Smelt({ dirPath: options.path });
    var packageCommand = 'tar cvfz ' + options.name + '.tar.gz ' + options.dir;
    smelt.runCommand(packageCommand, options.pidsObj, function (packageCommandResult) {

        return cb(packageCommandResult);
    });
};
