<template>
  <v-app>
    <div>
      <!-- ヘッダー -->
      <Header />

      <!-- ページコンテンツ -->
      <main>
        <NuxtPage />
      </main>

      <!-- フッター -->
      <Footer />
    </div>
  </v-app>
  
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
main {
  padding: 20px;
  min-height: calc(100vh - 100px); /* ヘッダーとフッターを除く高さ調整 */
}
</style>
