export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsState {
    articles: Article[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    selectedArticle: Article | null;
    page: number;
}
