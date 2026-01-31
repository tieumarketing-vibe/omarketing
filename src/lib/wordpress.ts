
export interface WPPost {
    ID: number;
    site_ID: number;
    author: {
        ID: number;
        login: string;
        email: false;
        name: string;
        first_name: string;
        last_name: string;
        nice_name: string;
        URL: string;
        avatar_URL: string;
        profile_URL: string;
    };
    date: string;
    modified: string;
    title: string;
    URL: string;
    short_URL: string;
    content: string;
    excerpt: string;
    slug: string;
    guid: string;
    status: string;
    sticky: boolean;
    password: string;
    parent: false | object;
    type: string;
    discussion: object;
    likes_enabled: boolean;
    sharing_enabled: boolean;
    like_count: number;
    i_like: boolean;
    is_reblogged: boolean;
    is_following: boolean;
    global_ID: string;
    featured_image: string;
    post_thumbnail: {
        ID: number;
        URL: string;
        guid: string;
        mime_type: string;
        width: number;
        height: number;
    } | null;
    format: string;
    geo: boolean;
    menu_order: number;
    page_template: string;
    publicize_URLs: string[];
    tags: {
        [key: string]: {
            ID: number;
            name: string;
            slug: string;
            description: string;
            post_count: number;
            meta: object;
            parent: number;
        };
    };
    categories: {
        [key: string]: {
            ID: number;
            name: string;
            slug: string;
            description: string;
            post_count: number;
            parent: number;
            meta: object;
        };
    };
    attachments: object;
    attachment_count: number;
    metadata: object[];
    meta: object;
}

export interface WPResponse {
    found: number;
    posts: WPPost[];
    meta: {
        next_page: string;
    };
}

export interface WPCategory {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    parent: number;
    meta: object;
}

export interface WPCategoryResponse {
    found: number;
    categories: WPCategory[];
}

const API_URL = "https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/posts/";

export async function getPosts(): Promise<WPPost[]> {
    try {
        const res = await fetch(API_URL);
        const data: WPResponse = await res.json();
        return data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    // The public API doesn't allow filtering by slug directly in the /posts/ endpoint easily without iterating or using specific lookup.
    // However, we can use the /posts/slug:{slug} endpoint for single post lookup.
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/posts/slug:${slug}`;
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const data: WPPost = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}

export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>?/gm, '');
}

export interface WPCategory {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    parent: number;
    meta: object;
}

export interface WPCategoryResponse {
    found: number;
    categories: WPCategory[];
}

export interface WPTag {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    meta: object;
}

export interface WPTagResponse {
    found: number;
    tags: WPTag[];
}

export async function getCategories(): Promise<WPCategory[]> {
    const url = "https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/categories/";
    try {
        const res = await fetch(url);
        const data: WPCategoryResponse = await res.json();
        return data.categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export async function getPostsByCategory(slug: string): Promise<WPPost[]> {
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/posts/?category=${slug}`;
    try {
        const res = await fetch(url);
        const data: WPResponse = await res.json();
        return data.posts;
    } catch (error) {
        console.error(`Error fetching posts for category ${slug}:`, error);
        return [];
    }
}

export async function getTags(): Promise<WPTag[]> {
    const url = "https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/tags/";
    try {
        const res = await fetch(url);
        const data: WPTagResponse = await res.json();
        return data.tags;
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
}

export async function getPostsByTag(slug: string): Promise<WPPost[]> {
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/posts/?tag=${slug}`;
    try {
        const res = await fetch(url);
        const data: WPResponse = await res.json();
        return data.posts;
    } catch (error) {
        console.error(`Error fetching posts for tag ${slug}:`, error);
        return [];
    }
}
