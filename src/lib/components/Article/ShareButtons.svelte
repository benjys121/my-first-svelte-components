<script>
  // Props: url, title, via (Twitter handle without @)
  let { url = '', title = '', via = '' } = $props();

  const twitterUrl = () => {
    const params = new URLSearchParams();
    if (title) params.set('text', title);
    if (url) params.set('url', url);
    if (via) params.set('via', via);
    return `https://twitter.com/intent/tweet?${params.toString()}`;
  };

  const facebookUrl = () => {
    const params = new URLSearchParams();
    if (url) params.set('u', url);
    return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
  };

  const linkedInUrl = () => {
    const params = new URLSearchParams();
    params.set('mini', 'true');
    if (url) params.set('url', url);
    if (title) params.set('title', title);
    return `https://www.linkedin.com/shareArticle?${params.toString()}`;
  };
</script>

<div class="share-buttons" role="group" aria-label="Share article">
  <a class="btn twitter" href={twitterUrl()} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
    <span class="visually-hidden">Share on Twitter</span>
    🐦 Twitter
  </a>

  <a class="btn facebook" href={facebookUrl()} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
    <span class="visually-hidden">Share on Facebook</span>
    📘 Facebook
  </a>

  <a class="btn linkedin" href={linkedInUrl()} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
    <span class="visually-hidden">Share on LinkedIn</span>
    🔗 LinkedIn
  </a>
</div>

<style lang="scss">
  .share-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.6rem;
    border-radius: 4px;
    text-decoration: none;
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
  }

  .twitter { background: #1da1f2; }
  .facebook { background: #1877f2; }
  .linkedin { background: #0a66c2; }

  .visually-hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
</style>
