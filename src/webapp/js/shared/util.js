import uuidV1 from 'uuid/v1';
import dateFormat from 'dateformat'

export const isProd = process.env.NODE_ENV === 'production'

export const getUniqueKey = () => uuidV1();

export const printSysDate = () => {
    return printDate(new Date());
};

export const printDate = (date) => {
    return date ? dateFormat(date) : '';
};