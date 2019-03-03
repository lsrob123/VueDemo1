export class RandomInfoService {
    constructor() {

    }

    getDateTime() {
        return new Date();
    }

    async postSomeDataAsync() {
        const promise = await fetch('https://vuedemo1.free.beeceptor.com', {
            method: 'POST',
            body: `{data:'123abcd'}`
        });
        
        return promise;
    }
}
