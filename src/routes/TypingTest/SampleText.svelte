<script>
  import { generateSampleText } from "./sampleText";

  let sampleText = generateSampleText();
</script>

<div class="text-block">
  <p>{sampleText}</p>
</div>

<style>
  .text-block {
    display: flex;
    width: 100%;
    height: 258px;
    border-radius: 4px;
    background-color: #fefbf3;
    margin: 24px 0;
  }

  p {
    display: -webkit-box;
    font-size: 24px;
    padding: 24px 38px;
    max-width: 100%;
    overflow: hidden;
    border-bottom: 14px #fefbf3 solid;
  }
</style>