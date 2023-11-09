/* eslint-disable @typescript-eslint/no-var-requires */
const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { describe, it } = (exports.lab = Lab.script());
const calcServices = require('../src/utils/calculation.service');

describe('Testing  warehouseAvailability function', () => {
    it('Expecting to return 25 as availability from the warehouse', async () => {
        expect(await calcServices.warehouseAvailability(100, 75)).to.equal(25);
    });
});
