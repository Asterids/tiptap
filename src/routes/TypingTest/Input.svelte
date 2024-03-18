<script>
  import { inputText, isRunning, resetTest, startTestTimer, timerLabel } from "./store";
</script>

<section class="input-container">
  <form class="input-box">
    <div class="input-box-header">
      <label for="type-here">Type to begin:</label>
      {#if $isRunning}
        <p id="timer">{$timerLabel}</p>
      {/if}
      {#if $isRunning}
      <button id="reset" on:click={resetTest}>Reset</button>
      {/if}
    </div>
    <textarea id="type-here" rows="10" cols="19" bind:value={$inputText} on:keydown={startTestTimer} />
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

  .input-box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
  }

  #timer {
    font-weight: 800;
    font-size: 20px;
    color: #257950  }

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

  #reset {
    background-color: #fefbf3;
    color: #000;
  }

  #reset:hover {
    background-color: #c1e4ff;
  }
</style>