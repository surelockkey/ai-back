import appConfig from "./app.config";
import graphqlConfig from "./graphql.config";
import { GqlConfigService } from '../service/graphql.service';
import { TypeOrmConfigService } from '../service/typeorm.service';
import typeormConfig from "./typeorm.config";
import jwtConfig from "./jwt.config";
import ctmConfig from "./ctm.config";

export default [appConfig, graphqlConfig, typeormConfig, jwtConfig, ctmConfig];
export { GqlConfigService, TypeOrmConfigService };


export interface ConfigType {
    app: {
        backend_url: string;
        frontend_url: string;
        port: number;
        open_ai_key: string;
    };
    graphql: {
        playground: boolean;
        debug: boolean;
    };
    typeorm: {
        type: 'postgres';
        host: string;
        port: number;
        password: string;
        name: string;
        username: string;
        synchronize: boolean;
    };
    jwt: {
        key: string;
        access_expire: string;
        refresh_expire: string;
    };
    ctm: {
        user: string;
        password: string;
        api_url: string;
        account_id: number;
    }
};