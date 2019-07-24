import {Param, Body, Get, Post, Put, Delete, JsonController} from 'routing-controllers';
import {UserDao} from '../daos/User/UserDao';

@JsonController()
export class UserController {

    constructor(private users: UserDao) {
    }

    @Get('/users')
    private getAll() {
        // return 'This action returns all users';
        return this.users.getAll();
    }

    @Get('/users/:id')
    private getOne(@Param('id') id: number) {
        return {
            msg: 'This action returns user #' + id,
        };
    }

    @Post('/users')
    private post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/users/:id')
    private put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/users/:id')
    private remove(@Param('id') id: number) {
        return 'Removing user...';
    }

}
