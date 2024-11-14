import { NotFoundException } from "@nestjs/common";
import { Repository, UpdateResult } from "typeorm";
import { HasId } from "./has-id.interface";

export class CrudService <Entity extends HasId>  {

    constructor(private repository: Repository<Entity>){}

    findAll(): Promise<Entity[]> {
        return this.repository.find();
    }
    findOne(id): Promise<Entity> {
        return this.repository.findOne({
            where: {id}
        });
    }
    

    create(addDto: any): Promise<Entity> {
        console.log({addDto});
        
        return this.repository.save(addDto);
    }
    
    async update(id: string, updateDto: any): Promise<Entity> {
        const newProduct = await this.repository.preload({id, ...updateDto })
        if(!newProduct) throw new NotFoundException(`l'id ${id} n'existe pas`);
        return this.repository.save(newProduct);
    }

    async softDelete(id: string): Promise<UpdateResult> {
       const result = await this.repository.softDelete(id);
       if (result.affected == 0) throw new NotFoundException(`l'id ${id} n'existe pas`); 
       return result; 
    }
    async restore(id: string): Promise<UpdateResult> {
       const result = await this.repository.restore(id);
       if (result.affected == 0) throw new NotFoundException(`l'id ${id} n'existe pas`); 
       return result; 
    }

}