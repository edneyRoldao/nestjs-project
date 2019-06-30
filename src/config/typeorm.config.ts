export const datasource: any = {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'taskmanagement',
    entities: [__dirname + '../**/*.entity.{js, ts}'],
    synchronize: true,
};
