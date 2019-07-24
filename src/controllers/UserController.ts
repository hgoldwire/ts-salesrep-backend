import {Body, Get, JsonController, Post} from 'routing-controllers';
import {UserDao} from '../daos/User/UserDao';
import {Equals} from 'class-validator';

export class GetUserRequest {
    @Equals(357437875835)
    public userId: number;

    constructor(userId: number) {
        this.userId = userId;
    }
}

@JsonController()
export class UserController {

    constructor(private users: UserDao) {
    }

    // get one class
    @Post('/goat')
    private getOne(@Body() getUserRequest: GetUserRequest) {
        return this.users.getAll().then((users) => users.find((user) => user.id === getUserRequest.userId));
    }

    @Get('/users')
    private getAll() {
        // return 'This action returns all users';
        return this.users.getAll();
    }

}
