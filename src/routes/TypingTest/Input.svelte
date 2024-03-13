<script>
  import { inputText } from "./store";
</script>

<section class="input-container">
  <form class="input-box">
    <label for="type-here">Start typing to begin...</label>
    <textarea id="type-here" rows="10" cols="19" bind:value={$inputText} />
    <button on:click={() => inputText.set('')}>Reset</button>
  </form>
</section>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    border-radius: 4px;
    background-color: #fefbf3;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 92%;
    height: 100%;
    padding: 16px 0;
  }

  textarea {
    box-sizing: border-box;
    display: flex;
    padding: 16px;
    margin: 14px 0;
    width: 100%;
    height: 100%;
    height: 220px;
    font-size: 20px;
    line-height: 1.55;
  }

  button {
    align-self: flex-end;
  }
</style>