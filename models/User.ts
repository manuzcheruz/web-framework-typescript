/**
 * creating an interface to rep the type of data accepted by
 * the User constructor
 */
interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => {}

/**
 * create a user class that implements several methods
 */
export class User {
    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        
    }
}