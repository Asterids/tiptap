<script>
  const generateSampleText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  let sampleText = generateSampleText();
</script>

<div class="text-block">
  <p>{sampleText}</p>
</div>

<style>
  .text-block {
    display: flex;
    width: 100%;
    height: 250px;
    border-radius: 6px;
    background-color: #fefbf3;
    margin: 24px 0;
  }

  p {
    padding: 30px;
    overflow: hidden;
  }
</style>