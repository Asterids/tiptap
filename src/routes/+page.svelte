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
  <header>
    <hr />
    <h1><i>tip tap</i></h1>
    <hr />
    <p>Welcome to <i>tip tap</i>, a typing test!</p>
  </header>

  <div class="content">
    <TextBlock />
    <InputBox />
  </div>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    padding-top: 50px;
  }

  header h1 {
    padding: 10px 0;
    font-weight: 700;
  }

  header p {
    padding: 20px 0;
  }

  hr {
    size: 1px;
    width: 100%;
    color: black;
    margin: 0;
    border-style: solid;
    border-bottom: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 800px;
  }
</style>