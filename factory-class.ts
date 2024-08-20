interface IEnvironment {
    info(message: string) : void;
    warn(message: string) : void;
    error(message: string) : void;
    debug(message: string) : void;
}

class ProductionEnvironment implements IEnvironment {
    info(message: string) : void {};
    warn(message: string) : void {
        console.warn(message)
    };
    error(message: string) : void {
        console.error(message)
    };
    debug(message: string) : void {};
}

class DevelopmentEnvironment implements IEnvironment {
    info(message: string) : void {
        console.info(message)
    };
    warn(message: string) : void {
        console.warn(message)
    };
    error(message: string) : void {
        console.error(message)
    };
    debug(message: string) : void {
        console.debug(message)
    };
}

export class EnvironmentFactory {
    public static createEnvironment(): IEnvironment {
        if (process.env.NODE_ENV === 'production') return new ProductionEnvironment;
        else return new DevelopmentEnvironment;
    }
}