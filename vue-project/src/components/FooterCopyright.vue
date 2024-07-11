<template>
    <footer class="bottom-0">
      <div class="flex my-5 justify-center text-xs text-[#763538] md:text-sm">
        <p>Copyright &copy; {{ currentYear }} Bon Tourisme</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>