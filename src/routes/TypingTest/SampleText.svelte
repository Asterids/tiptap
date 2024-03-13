<script lang="ts">
  import { sampleText, selectedLang } from "./store";
  import { generateSampleText } from "./sampleText";

  const handleSelectTab = (lang: string) => {
    selectedLang.set(lang);
    sampleText.set(generateSampleText(lang));
  }
</script>

<div>
  <div class="lang-selection">
    <button class="lang-selection-tab" on:click={() => handleSelectTab('lorem')} value="lorem" name="lorem">Lorem</button>
    <button class="lang-selection-tab" on:click={() => handleSelectTab('english')} value="english" name="english">English</button>
    <button class="lang-selection-tab" on:click={() => handleSelectTab('french')} value="french" name="french">French</button>
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