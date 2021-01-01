interface DB<T> {
    add(t:T):any;
    updateById(t:T, id:number):number;
    delete(t:T):number;
    get():any;
}

class MySql<T> implements DB<T> {
    add(t: T) {
        console.log("add" + JSON.stringify(t));
    }

    delete(t: T): number {
        console.log("delete"+t)
        return 1;
    }

    get(): any {

        return undefined;
    }

    updateById(t: T, id: number): number {
        console.log("update"+t)
        return 1;
    }
}

class MongoDB<T> implements DB<T> {
    add(t: T): any {
        console.log("mongodb add" + JSON.stringify(t));
    }

    delete(t: T): number {
        return 0;
    }

    get(): any {
    }

    updateById(t: T, id: number): number {
        return 0;
    }

}

export {MySql,MongoDB};