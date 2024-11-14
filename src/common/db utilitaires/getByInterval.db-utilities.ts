import { SelectQueryBuilder } from "typeorm";

export function getDateInterval<Entity>(
    qb: SelectQueryBuilder<Entity>,
    dateName: string,
    startDate?: Date,
    endDate?: Date,
) {
    if(startDate) {
        qb.andWhere(`${dateName} >= :dateMin`, {dateMin: startDate})
    }
    if(endDate) {
        qb.andWhere(`${dateName} <= :dateMax`, {dateMax: endDate})
    }
}