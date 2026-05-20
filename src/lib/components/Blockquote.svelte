<script>
  let { quote, attribution } = $props();
</script>

<blockquote>
  <p>{quote}</p>
  <cite>— {attribution}</cite>
</blockquote>

<style>
  blockquote {
    margin: 2rem 0;
    padding: 1rem;
    padding-left: 1.5rem;
    border-left: 1px solid var(--color-accent);
    background-color: var(--color-light-red);
  }

  p {
    font-size: 2rem;
    line-height: 1.6;
    font-style: italic;
    color: red;
  }

  cite {
    margin: 0.5rem 0 0;
    display: block;
    text-align: right;
    font-size: 0.875rem;
    font-weight: bold;
    font-style: normal;
    color: red;
  }
</style>