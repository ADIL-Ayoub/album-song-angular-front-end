import { Song } from "./Song";

export interface Album{
    id:number;
    name: string;
    views:number;
    songs:Song[] | null;
}