var Code = require('code');
var Fs = require('fs');
var Hapi = require('hapi');
var Lab = require('lab');
var Path = require('path');

//var CatchAndRelease = require('../lib');

var internals = {};

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

var path = __dirname + '/tmp';

describe('catch-and-release', function () {

    it('packageCode', function (done) {

        var catchAndRelease = new CatchAndRelease({});
        var result = catchAndRelease.packageCode(path + '/test', 'name');
        expect(result.startTime).to.exist();
        expect(result.finishTime).to.exist();
        expect(result.commands[0].command).to.include('tar ');
        expect(result.status).to.equal('succeeded');
        done();
    });
});
