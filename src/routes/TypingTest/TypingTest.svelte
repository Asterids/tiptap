<script>
  import Input from "./Input.svelte";
  import SampleText from "./SampleText.svelte";
</script>

<section class="content">
  <SampleText />
  <Input />
</section>

<style>
  .content {
    display: flex;
    flex-direction: column;
    width: 800px;
  }
</style>