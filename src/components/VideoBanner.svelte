<script>
    import homeVideo from "/src/assets/video/FINAL_BannerWebFenix_01.mp4";
    import muteIcon from "/src/assets/icons/mute.png";
    import volumeIcon from "/src/assets/icons/volume.png";
    let muted = true;
    function setMuteVideo() {
        muted = !muted;
        let videoRef = document.getElementById("video-bg");
        if (muted) {
            videoRef.setAttribute("muted", "");
            videoRef.muted = true;
        } else {
            videoRef.removeAttribute("muted");
            videoRef.muted = false;
        }
    }
</script>

<div class="w-full h-screen relative">
    <video
        id="video-bg"
        class="w-full h-full object-cover"
        src={homeVideo}
        autoplay
        loop
        muted
    >
        <track kind="captions" />
    </video>
    <div
        class="flex flex-col justify-end items-end w-full h-screen absolute top-0 px-10 py-[72px]"
    >
        <button id="mute-btn" class="z-[10]" on:click={setMuteVideo}>
            {#if muted}
                <img src={muteIcon.src} alt="mute" width="32" height="auto" />
            {:else}
                <img
                    src={volumeIcon.src}
                    alt="volume"
                    width="32"
                    height="auto"
                />
            {/if}
        </button>
    </div>
    <div
        class="flex flex-col justify-end items-center w-full h-screen absolute top-0 p-10"
    >
        <slot></slot>
    </div>
</div>
