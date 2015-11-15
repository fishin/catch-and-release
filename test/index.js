'use strict';

const Code = require('code');
const Fs = require('fs');
const Lab = require('lab');
const Path = require('path');

const CatchAndRelease = require('../lib');

const internals = {
    defaults: {
        pids: []
    }
};

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

describe('catch-and-release', () => {

    it('packageCode', (done) => {

        const catchAndRelease = new CatchAndRelease({});
        const options = {
            name: 'name',
            path: __dirname,
            dir: 'tmp',
            pidsObj: internals.defaults.pids
        };
        catchAndRelease.packageCode(options, (result) => {

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
