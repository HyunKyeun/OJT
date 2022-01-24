import { CreateUserinfoDTO } from './dto/create-userinfo.dto';
import { UpdateUserinfoDTO } from './dto/update-userinfo.dto';
import { UserinfoService } from './userinfo.service';
import { Info } from './entities/userinfo.entity';
export declare class UserinfoController {
    readonly userinfoService: UserinfoService;
    constructor(userinfoService: UserinfoService);
    getAll(): Info[];
    getOne(ID: string): Info;
    create(Userinfo: CreateUserinfoDTO): void;
    remove(ID: string): void;
    patch(ID: string, UpdateData: UpdateUserinfoDTO): void;
}
