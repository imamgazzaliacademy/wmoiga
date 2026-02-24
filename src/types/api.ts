export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}

export interface ImportantDate {
    id?: number | string;
    title: string;
    date: string;
    description?: string;
}

export interface Alumni {
    id?: number | string;
    name: string;
    batch: string;
    profession: string;
    photoUrl?: string;
    photo?: string;
    isFeatured?: boolean;
}
