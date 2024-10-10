export default class ApiError extends Error {
    constructor(stausCode,message = "Something went wrong"){
        super(message);
        this.stausCode = stausCode;
        this.data = null;
        this.error = message;
        this.success = false
    }
}