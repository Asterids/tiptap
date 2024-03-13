<script>
  import Input from "./Input.svelte";
  import SampleText from "./SampleText.svelte";
</script>

<div class="content">
  <SampleText />
  <Input />
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    width: 800px;
  }
</style>