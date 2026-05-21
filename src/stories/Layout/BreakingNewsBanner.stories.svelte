<!--
  BreakingNewsBanner.stories.svelte

  Stories for the BreakingNewsBanner component.
  Displays a full-width breaking news banner with a headline and click-through link.
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BreakingNewsBanner from '$lib/components/Layout/BreakingNewsBanner.svelte';

  const { Story } = defineMeta({
    title: 'Layout/BreakingNewsBanner',
    component: BreakingNewsBanner,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {
      headline: {
        control: 'text',
        description: 'Breaking news headline text displayed in the banner',
      },
      href: {
        control: 'text',
        description: 'URL for the breaking news link',
      },
    },
  });
</script>

<Story
  name="Default"
  args={{
    headline: 'Breaking: New journalism fellowship announced — click to learn more.',
    href: 'https://www.nycitynewsservice.com/latest-news/',
  }}
/>

<Story
  name="Short Headline"
  args={{
    headline: 'Breaking: Early registration closes tonight.',
    href: 'https://www.nycitynewsservice.com/register/',
  }}
/>
