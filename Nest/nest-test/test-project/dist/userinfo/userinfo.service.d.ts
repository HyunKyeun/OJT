import { CreateUserinfoDTO } from './dto/create-userinfo.dto';
import { UpdateUserinfoDTO } from './dto/update-userinfo.dto';
import { Info } from './entities/userinfo.entity';
export declare class UserinfoService {
    private userinfos;
    getAll(): Info[];
    getOne(id: string): Info;
    deleteOne(id: string): void;
    create(userinfodata: CreateUserinfoDTO): void;
    update(id: string, updateData: UpdateUserinfoDTO): void;
}
