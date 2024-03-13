<script lang="ts">
  import { sampleText, selectedLang } from "./store";
  import { generateSampleText } from "./sampleText";

  const handleSelectTab = (lang: string) => {
    selectedLang.set(lang);
    sampleText.set(generateSampleText(lang));
  }

  let isSelected = (selectedLang: string, lang: string) => {
    return $selectedLang === lang ? 'selected' : '';
  }
</script>

<section class="sample-text">
  <div class="lang-selection">
    <button class="lang-selection-tab {isSelected($selectedLang, 'lorem')}" on:click={() => handleSelectTab('lorem')} value="lorem" name="lorem">Lorem</button>
    <button class="lang-selection-tab {isSelected($selectedLang, 'english')}" on:click={() => handleSelectTab('english')} value="english" name="english">English</button>
    <button class="lang-selection-tab {isSelected($selectedLang, 'french')}" on:click={() => handleSelectTab('french')} value="french" name="french">French</button>
  </div>
  <div class="text-block">
    <p>{$sampleText}</p>
  </div>
</section>

<style>
  .sample-text {
    margin: 26px 0;
  }

  .lang-selection {
    display: flex;
    justify-content: flex-start;
    padding-left: 28px;
  }

  button {
    margin: 0 4px;
    border-radius: 5px 5px 0 0;
    border: none;
  }

  .selected {
    background-color: #fefbf3;
    color: #000;
  }

  .text-block {
    display: flex;
    width: 100%;
    height: 260px;
    border-radius: 4px;
    background-color: #fefbf3;
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