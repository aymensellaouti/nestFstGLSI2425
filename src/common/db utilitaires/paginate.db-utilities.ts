import { SelectQueryBuilder } from "typeorm";

export function paginate<Entity>(
    qb: SelectQueryBuilder<Entity>,
    page: number = 1,
    nb: number = 10,
) {
    // skip: à partir de quelle position
    // take: combien d'élément
//  p1 =>   0 -> 9
//  p2 =>   10 -> 19


    qb.skip((page - 1) * nb);
    qb.take(nb);
}