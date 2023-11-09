import * as Database from '../models/db';
import * as errors from '../errors';
import * as _ from 'lodash';

/**
 * Get specific value from DB according to:
 * @param table table from the value
 * @param field field name
 * @param whereVal where clausure object
 * @returns single value
 */
export async function getValue(table: string, field: string, whereVal: any) {
    try {
        const res = await Database.knex
            .first()
            .column(field)
            .from(`${table}`)
            .where(whereVal);
        return res;
    } catch (error) {
        throw new errors.UnknownError(
            'error in db-helpers.ts, getValue(): \n' + error
        );
    }
}
/**
 * Get all values from DB according to:
 * @param table table from the value
 * @param fields [string] field name values
 * @param whereVal where clausure object, if empty no where clausere will be added
 * @returns [objects]
 */
export async function getValues(table: string, fields: any, whereVal: any) {
    let queryBuilder: typeof Database.knex.prototype.QueryBuilder =
        Database.knex;
    queryBuilder = queryBuilder.select().column(fields).from(`${table}`);
    if (!_.isEmpty(whereVal)) queryBuilder = queryBuilder.where(whereVal);
    try {
        return await queryBuilder;
    } catch (error) {
        throw new errors.UnknownError(
            'error in db-helpers.ts, getValues(): \n' + error
        );
    }
}
/**
 * Insert values in DB
 * @param table table to affect
 * @param values object of values to add in the table
 * @param returning value to return if is <> '' (empty)
 * @returns
 */
export async function insertValue(
    table: string,
    values: any,
    returning: string
) {
    try {
        let res;
        if (returning != '') {
            res = await Database.knex(`${table}`)
                .insert(values)
                .returning(returning);
        } else {
            res = await Database.knex(`${table}`).insert(values);
        }

        return res;
    } catch (error) {
        throw new errors.UnknownError(
            'error in db-helpers.ts, insertValue(): \n' + error
        );
    }
}
