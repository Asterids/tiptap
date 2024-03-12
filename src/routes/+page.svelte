<script>
	import TextBlock from './TextBlock.svelte';
  import InputBox from './InputBox.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>tiptap</title>
	<meta name="description" content="tiptap typing test" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
</svelte:head>

<section>
  <h1>tip tap</h1>
  <p>Welcome to tip tap, a typing test!</p>

  <TextBlock />
  <InputBox />
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Manrope";
  }
</style>