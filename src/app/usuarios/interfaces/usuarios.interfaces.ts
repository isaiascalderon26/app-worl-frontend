export interface User {
    ok:    boolean;
    posts: Post[];
}

export interface Post {
    id?:    string;
    _id?:   string;
    title: string;
    text:  string;
    image?: string; 
    tag:   string;
    date:  string;
}