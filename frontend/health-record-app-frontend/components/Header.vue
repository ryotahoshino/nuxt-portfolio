<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <UButton color="gray" variant="solid" icon="i-heroicons-bars-3" @click="isOpen = true" />
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          健康管理アプリ
        </h1>
      </div>
      <USlideover v-model="isOpen" prevent-close>
        <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                メニュー一覧
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>
          <template #default>
            <ULink to="/" class="flex items-center justify-between py-4 px-6">
              <span>ホーム</span>
              <UIcon name="i-heroicons-home-20-solid" />
            </ULink>
            <ULink to="/health-records" class="flex items-center justify-between py-4 px-6">
              <span>運動記録</span>
              <UIcon name="i-heroicons-fire-20-solid" />
            </ULink>
            <ULink to="/health-records" class="flex items-center justify-between py-4 px-6">
              <span>健康記録</span>
              <UIcon name="i-heroicons-heart-20-solid" />
            </ULink>
            <ULink to="/settings" class="flex items-center justify-between py-4 px-6">
              <span>設定</span>
              <UIcon name="i-heroicons-cog-20-solid" />
            </ULink>
          </template>
        </UCard>
      </USlideover>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => { isOpen.value = false }
  }
})
</script>

<style scoped>
header {
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>