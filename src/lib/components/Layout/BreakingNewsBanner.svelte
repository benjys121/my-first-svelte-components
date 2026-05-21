<script>
  let {
    headline = 'Breaking: New class registration opens today.',
    href = '#',
  } = $props();
</script>

<div class="breaking-news-banner" role="region" aria-label="Breaking news alert">
  <span class="label">BREAKING</span>
  <a href={href} class="headline-link">{headline}</a>
</div>

<style lang="scss">
  @use '../../styles' as *;

  .breaking-news-banner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem var(--spacing-sm);
    background-color: #b00020;
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .label {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 999px;
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .headline-link {
    color: var(--color-white);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    font-weight: var(--font-weight-semibold);
    max-width: 100%;
  }

  .headline-link:hover,
  .headline-link:focus-visible {
    opacity: var(--opacity-hover);
  }
</style>
