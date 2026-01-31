
import { getCategories } from './src/lib/wordpress.ts';

async function main() {
    console.log("Fetching categories...");
    try {
        const categories = await getCategories();
        console.log("Categories found:");
        categories.forEach(c => {
            console.log(`Name: '${c.name}', Slug: '${c.slug}'`);
        });
    } catch (e) {
        console.error(e);
    }
}

main();
