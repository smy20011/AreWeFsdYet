import _ from "lodash";

export interface FsdVersionData {
    version: string;
    city_miles: number;
    runs: number;
    success_rate: number;
    min_date?: Date;
}

export function groupBySubVersion(data: FsdVersionData[]): FsdVersionData[] {
    return _.chain(data)
        .groupBy((d) => d.version.split(".").slice(0, 2).join("."))
        .map((values, version) => {
            const total_miles = _.sum(values.map(v => v.city_miles));
            const total_failure = _.sum(values.map(v => Math.round(v.runs * (1 - v.success_rate))));
            const runs = _.sum(values.map(v => v.runs));
            const min_date = _.min(values.map(v => v.min_date));

            return {
                version,
                city_miles: total_miles,
                runs,
                success_rate: 1 - total_failure * 1.0 / runs,
                min_date,
            }
        })
        .value();
}