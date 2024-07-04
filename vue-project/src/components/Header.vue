<template>
    <header class="border border-transparent" id="bgTOP">
        <div class="relative mx-auto my-2 px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row h-auto md:h-60 items-center md:items-start justify-between">
                <!-- Empty div for centering purposes -->
                <div class="flex-1"></div>
                <!-- BLOC LOGO -->
                <div class="flex flex-col justify-center items-center w-full md:w-auto">
                    <div class="flex flex-row justify-center md:-mt-10">
                        <img src="/images/Logo_Transparent.png" alt="Logo Bon Tourisme" class="w-32 md:w-auto" />
                    </div>
                    <div class="flex flex-row justify-center mt-2 md:-mt-10">
                        <h1 class="oneLine text-[#763538] italic font-extralight opacity-75 text-center">
                            Ne plus être déçu est notre façon de profiter
                        </h1>
                    </div>
                </div>
                <!-- BLOC CONNECTION -->
                <div
                    class="absolute top-2 right-4 md:relative md:top-0 md:right-0 md:flex-1 md:flex md:justify-end md:self-start flex items-center gap-4 mt-4 md:mt-0">
                    <div class="flex gap-4">
                        <a class="rounded-md bg-[#763538] px-5 py-2.5 text-sm font-medium invisible md:visible md:hover:bg-white md:hover:text-[#763538]"
                            href="#">
                            S'enregistrer
                        </a>
                        <div class="flex gap-4 z-10">
                            <a class="rounded-md bg-[#763538] text-white hover:bg-white hover:text-[#763538] px-5 py-2.5 text-sm font-medium"
                                href="#">
                                Connection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
#bgTOP{
    background-image: url(/images/Baie_Rouge.jpg);
    background-position: 50% 38%;
    background-repeat: no-repeat;
}
@media (max-width: 768px) {
    #bgTOP {
        background-image: none;
    }
}
</style>
