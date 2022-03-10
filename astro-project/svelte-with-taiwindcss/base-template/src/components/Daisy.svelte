<svelte:head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/daisyui@2.0.6/dist/full.css" rel="stylesheet" type="text/css" />
	<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>	
</svelte:head>

<script>
//   import logo from 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png'
  import Counter from './Counter.svelte'
</script>

<main>
  <!-- TailwindCSS -->
  <h1 class="text-3xl font-bold underline text-blue-400">
    Hello world!
  </h1> 
<!-- Svelte Component -->
  <Counter />
<!-- DaisyUI component -->
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

</main>
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style> 