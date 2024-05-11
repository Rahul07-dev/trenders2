import { status } from "express/lib/response";

class APiResponse {
    constructor(statusCode,data, message="Success"){
      this.statusCode=statusCode
      this.data=data
      this.message=message
      this.success= statusCode<400
    }
}

/*
 information 100-199
 sucessful 200-299
 redirection 300-399
 client error 400-499
 server error (500-599)
*/