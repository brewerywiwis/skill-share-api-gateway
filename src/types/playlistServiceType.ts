export interface createPlaylistRequest {
    title: string;
    description: string;
    videoList: string[];
    permission: string;
    userId?: string;
}

export interface editPlaylistRequest {
    id: string;
    title: string;
    description: string;
    videoList: string[];
    permission: string;
    userId?: string;
}