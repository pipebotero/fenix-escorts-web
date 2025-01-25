<script>
	import girl1 from "/src/assets/girls/1.jpg";
    import girl2 from "/src/assets/girls/2.jpg";
    import girl3 from "/src/assets/girls/3.jpg";

    let escorts = [
        {
            name: "Aria Mesa",
            image: girl1.src
        },
        {
            name: "Dora",
            image: girl2.src
        },
        {
            name: "Caitlyn",
            image: girl3.src
        },
        {
            name: "Aria Mesa",
            image: girl1.src
        },
        {
            name: "Dora",
            image: girl2.src
        },
        {
            name: "Caitlyn",
            image: girl3.src
        },
        {
            name: "Aria Mesa",
            image: girl1.src
        },
        {
            name: "Dora",
            image: girl2.src
        }
    ];
</script>

<div class="w-full flex flex-col items-center">
    <div class="flex justify-center">
        <h1 class="text-white text-3xl uppercase">Top Escorts</h1>
    </div>
    <div class="container mt-8">
        {#each escorts as escort}
            <div class="bg-no-repeat bg-cover bg-[50%]" style="background-image: url({escort.image});">
                <div class="content">
                    <h2>{escort.name}</h2>
                    <!-- <span>UI & UX Designer</span> -->
                </div>
            </div>
        {/each}
    </div>
    <div class="flex justify-center relative mt-10">
        <a
            class="btn btn-4 btn-4c border-[#ffffff] text-white hover:bg-[#dc0000] hover:border-[#dc0000] hover:text-white uppercase icon-arrow-right"
            href="escorts">Ver Escorts</a
        >
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 500px;
        gap: 10px;

        > div {
            flex: 0 0 120px;
            border-radius: 0.5rem;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            /* box-shadow: 1px 5px 15px #34312c; */
            /* box-shadow: inset 0px 0px 15px 10px #000; */
            position: relative;
            overflow: hidden;

            .content {
                font-size: 1.5rem;
                color: #fff;
                display: flex;
                align-items: center;
                padding: 15px;
                opacity: 0;
                flex-direction: column;
                height: 100%;
                justify-content: flex-end;
                background: rgb(130, 14, 0);
                background: linear-gradient(
                    0deg,
                    rgba(130, 14, 0, 0.6755077030812324) 0%,
                    rgba(255, 255, 255, 0) 100%
                );
                transform: translatey(100%);
                transition:
                    opacity 0.5s ease-in-out,
                    transform 0.5s 0.2s;
                visibility: hidden;

                span {
                    display: block;
                    margin-top: 5px;
                    font-size: 1.2rem;
                }
            }

            &:hover {
                flex: 0 0 250px;
                box-shadow: none;
                /* box-shadow: 1px 3px 15px #7e7f83; */
                /* box-shadow: inset 0px 0px 15px 10px #000; */
                transform: translatey(-30px);
            }

            &:hover .content {
                opacity: 1;
                transform: translatey(0%);
                visibility: visible;
            }
        }
    }
</style>