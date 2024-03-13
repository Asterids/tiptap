<script>
  import { sampleText } from "./store";
  import { 
    generateSampleTextLorem,
    generateSampleTextEnglish,
    generateSampleTextFrench,
  } from "./sampleText";
</script>

<div>
  <div class="lang-selection">
    <button class="lang-selection-tab" on:click={() => sampleText.set(generateSampleTextLorem())}>Lorem</button>
    <button class="lang-selection-tab" on:click={() => sampleText.set(generateSampleTextEnglish())}>English</button>
    <button class="lang-selection-tab" on:click={() => sampleText.set(generateSampleTextFrench())}>French</button>
  </div>
  <div class="text-block">
    <p>{$sampleText}</p>
  </div>
</div>

<style>
  .text-block {
    display: flex;
    width: 100%;
    height: 260px;
    border-radius: 4px;
    background-color: #fefbf3;
    margin: 26px 0;
  }

  p {
    display: -webkit-box;
    font-size: 24px;
    padding: 25px 38px;
    max-width: 100%;
    overflow: hidden;
    border-bottom: 14px #fefbf3 solid;
  }
</style>