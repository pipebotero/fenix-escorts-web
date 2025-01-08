<script module>
	let escorts = [
        {
            name: "Aria Mesa",
            image: "1.jpg"
        },
        {
            name: "Dora",
            image: "2.jpg"
        },
        {
            name: "Caitlyn",
            image: "3.jpg"
        },
        {
            name: "Aria Mesa",
            image: "1.jpg"
        },
        {
            name: "Dora",
            image: "2.jpg"
        },
        {
            name: "Caitlyn",
            image: "3.jpg"
        },
        {
            name: "Aria Mesa",
            image: "1.jpg"
        },
        {
            name: "Dora",
            image: "2.jpg"
        },
        {
            name: "Caitlyn",
            image: "3.jpg"
        },
        {
            name: "Aria Mesa",
            image: "1.jpg"
        },
        {
            name: "Dora",
            image: "2.jpg"
        },
        {
            name: "Caitlyn",
            image: "3.jpg"
        }
    ];
</script>

<script>
	function greet() {
		alert('Welcome to Svelte!');
	}
</script>

<div class="max-w-[90vw] min-h-[80vh] w-full mx-auto pt-8">
    <div class="mt-2 lg:-mt-[0.6rem] pb-10 grid grid-cols-2 gap-x-[2.5rem] md:gap-x-[4.6vw] xl:gap-x-[4.1vw] 2xl:gap-x-[3.8vw] xxl:gap-x-[3vw] sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5 xxl:grid-cols-6 xxxl:grid-cols-7 xxxxl:grid-cols-8 gap-y-[2rem] lg:gap-y-[4.4rem]">
        {#each escorts as escort}
            <div class="flex flex-col items-center aspect-[3/4]">
                <a class="w-full transition aspect-[3/4] overflow-hidden relative" href="">
                    <img class="w-full h-full object-cover" src={`/src/assets/girls/${escort.image}`} alt=""/>
                </a>
                <div class="text-white">{escort.name}</div>
            </div>
        {/each}
    </div>
</div>


<style>
	
</style>