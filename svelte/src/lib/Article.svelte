<script lang="ts">
    interface Article {
        title: String
        content: String
    }
    
    async function getArticle(): Promise<Article> {
        let response = await fetch("/article.json");
        return response.json();
    }
</script>

{#await getArticle()}
    loading
{:then article}
    <h1>{article.title}</h1>
    <h1>{article.content}</h1>
{:catch error}
    <h1>Error</h1>
{/await}
