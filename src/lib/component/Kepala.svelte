<script>
  import {
    PUBLIC_APPLICATION_TITLE as title,
    PUBLIC_META_APPLICATION_DESCRIPTION as description,
    PUBLIC_META_APPLICATION_KEYWORD as keyword
  } from '$env/static/public'
</script>

<svelte:head>
  <meta name="description" content="{description}">
  <meta name="keywords" content="{keyword}">

  <title>{title}</title>
</svelte:head>