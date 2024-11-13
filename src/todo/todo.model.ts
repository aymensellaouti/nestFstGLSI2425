export class Todo {
    constructor(
        public id = '',
        public name = '',
        public description = '',
        public status: TodoStatusEnum = TodoStatusEnum.actif,
        public createdAt: Date = new Date()
    ) {}
    
}

export enum TodoStatusEnum {
    actif = 'EN COURS',
    waiting = 'EN ATTENTE',
    done = 'FINALISE'
}