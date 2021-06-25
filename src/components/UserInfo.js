export class UserInfo {
    constructor({ nameProfile, jobProfile }) {
        this._name = document.querySelector(nameProfile);
        this._job = document.querySelector(jobProfile);

    }

    getUserInfo() {
        const name = this._name.textContent;
        const job = this._job.textContent;

        const data = { name: name, job: job };

        return data;
    }

    setUserInfo(data) {
        const nameInput = data.name;
        const jobInput = data.job;

        this._name.textContent = nameInput;
        this._job.textContent = jobInput;
    }
}