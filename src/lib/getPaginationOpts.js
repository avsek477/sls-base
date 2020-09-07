const isInteger = (val) => {
    const intRegex = /^\d+$/;
    return intRegex.test(val.toString());
};

export const getPaginationOpts = (query) => {
    return {
        perPage: (query.perpage && isInteger(query.perpage)) ? parseInt(query.perpage) : 10,
        page: (query.page && isInteger(query.page)) ? parseInt(query.page) : 1
    };
};