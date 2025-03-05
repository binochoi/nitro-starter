type Runtime = 'monolith';
const assert = (key: string) => {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`environment variable ${key} is undefined`);
    }
    return value;
}
export const useBuildtimeConfig = () => {

    return {
        runtime: assert('RUNTIME') as Runtime,
        baseURL: assert('BASE_URL'),
        db: {
            connectionString: assert('DB_CONNECTION_STRING'),
        }
    }
};

export type Config = ReturnType<typeof useBuildtimeConfig>;
