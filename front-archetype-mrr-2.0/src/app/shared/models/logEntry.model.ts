export class LogEntryModel {
    entryDate: Date;
    message: string;
    level: number;
    extraInfo: any[];
    logWithDate: boolean;
}

export enum LogLevel {
    All = '0',
    Debug = '1',
    Info = '2',
    Warn = '3',
    Error = '4',
    Fatal = '5'
}