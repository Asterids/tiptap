<script>
</script>

<div class="input-container">
  <form class="input-box">
    <label for="type-here">Type here...</label>
    <textarea id="type-here" rows="10" cols="19" />
    <button>Reset</button>
  </form>
</div>

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
    padding: 12px;
    margin: 14px 0;
    width: 100%;
    height: 100%;
    height: 220px;
    font-size: 18px;
  }

  button {
    width: 72px;
    height: 42px;
    align-self: flex-end;
    font-size: 16px;
    background-color: #183642;
    border: 1px solid #183642;
    border-radius: 5px;
    font-family: Manrope;
    font-weight: 600;
    color: #fff;
  }

  button:hover {
    background-color: #c1e4ff;
    color: #000;
  }
</style>