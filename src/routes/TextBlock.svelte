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
    height: 250px;
    border-radius: 4px;
    background-color: #fefbf3;
    margin: 24px 0;
  }

  p {
    padding: 30px;
    overflow: hidden;
  }
</style>