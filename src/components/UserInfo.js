export class UserInfo {
    constructor({ nameProfile, jobProfile }) {
        this._name = document.querySelector(nameProfile);
        this._job = document.querySelector(jobProfile);

    }

    getUserInfo() {
        const name = this._name.textContent;
        const job = this._job.textContent;

        const data = { name, job };

        return data;
    }

    setUserInfo({name, job}) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}