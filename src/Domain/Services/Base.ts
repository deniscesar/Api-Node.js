interface Base<T> {
    Get: (callback: (error: any, result: Array<T>) => void) => void;
    GetById: (id: string, callback: (error: any, result: T) => void) => void;
    Insert: (item: T, callback: (error: any, result: any) => void) => void;
    Update: (id: string, item: T, callback: (error: any, result: any) => void) => void;
    Delete: (id: string, callback: (error: any, result: any) => void) => void;
}

export = Base;