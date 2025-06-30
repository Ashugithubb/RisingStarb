import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
export const pgConfig: PostgresConnectionOptions={
    url:"postgresql://neondb_owner:npg_3dnLPmW8AbNH@ep-little-breeze-a454ziih-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
    type: "postgres",
    port: 5432,
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize:true,
}