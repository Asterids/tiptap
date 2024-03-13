<script>
	import TypingTest from './TypingTest/TypingTest.svelte';
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

  <TypingTest />
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
    padding-top: 60px;
  }

  header h1 {
    padding: 8px 0;
    font-weight: 800;
    font-size: 34px;
  }

  header p {
    padding: 15px 0 20px 0;
    font-size: 18px;
  }

  hr {
    size: 1px;
    width: 100%;
    color: black;
    margin: 0;
    border-style: solid;
    border-bottom: none;
  }
</style>