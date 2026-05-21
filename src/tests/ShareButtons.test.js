import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ShareButtons from '$lib/components/Article/ShareButtons.svelte';

describe('ShareButtons', () => {
  it('renders three share links with correct hrefs', () => {
    const props = {
      url: 'https://example.com/article/awesome',
      title: 'Amazing article',
      via: 'nycitynews',
    };

    render(ShareButtons, { props });

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    const [tw, fb, li] = links;
    expect(tw.href).toContain('https://twitter.com/intent/tweet');
    // Parse query params to robustly compare encoded values
    const twParams = new URL(tw.href).searchParams;
    expect(twParams.get('url')).toBe(props.url);
    expect(twParams.get('text')).toBe(props.title);
    expect(twParams.get('via')).toBe(props.via);

    expect(fb.href).toContain('https://www.facebook.com/sharer/sharer.php');
    const fbParams = new URL(fb.href).searchParams;
    expect(fbParams.get('u')).toBe(props.url);

    expect(li.href).toContain('https://www.linkedin.com/shareArticle');
    const liParams = new URL(li.href).searchParams;
    expect(liParams.get('url')).toBe(props.url);
  });
});
