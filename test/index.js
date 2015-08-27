var Code = require('code');
var Fs = require('fs');
var Hapi = require('hapi');
var Lab = require('lab');
var Path = require('path');

var CatchAndRelease = require('../lib');

var internals = {
    defaults: {
        pids: []
    }
};

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

describe('catch-and-release', function () {

    it('packageCode', function (done) {

        var catchAndRelease = new CatchAndRelease({});
        var options = {
            name: 'name',
            path: __dirname,
            dir: 'tmp',
            pidsObj: internals.defaults.pids
        };
        catchAndRelease.packageCode(options, function (result) {

            //console.log(result);
            expect(result.startTime).to.exist();
            expect(result.finishTime).to.exist();
            expect(result.command).to.include('tar ');
            expect(result.status).to.equal('succeeded');
            Fs.unlinkSync(Path.join(__dirname, 'name.tar.gz'));
            done();
        });
    });
});
