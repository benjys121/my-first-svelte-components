<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ShareButtons from '$lib/components/Article/ShareButtons.svelte';

  const { Story } = defineMeta({
    title: 'Article/ShareButtons',
    component: ShareButtons,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      url: { control: 'text' },
      title: { control: 'text' },
      via: { control: 'text' },
    },
  });
</script>

<Story
  name="Default"
  args={{
    url: 'https://example.com/article/awesome-story',
    title: 'Read this great article! — NYCity News Service',
    via: 'nycitynews',
  }}
/>
