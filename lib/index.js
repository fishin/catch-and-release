'use strict';

const Hoek = require('hoek');
const Smelt = require('smelt');

const internals = {
    defaults: {}
};

module.exports = internals.CatchAndRelease = function (options) {

    const settings = Hoek.applyToDefaults(internals.defaults, options);
    internals.CatchAndRelease.settings = settings;
    internals.settings = settings;
    this.packageCode = exports.packageCode;
};

exports.packageCode = function (options, cb) {

    const smelt = new Smelt({ dirPath: options.path });
    const packageCommand = 'tar cvfz ' + options.name + '.tar.gz ' + options.dir;
    smelt.runCommand(packageCommand, options.pidsObj, (packageCommandResult) => {

        return cb(packageCommandResult);
    });
};
