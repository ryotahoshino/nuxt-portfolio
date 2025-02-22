<template>
  <h1>Hello World</h1>
  <NuxtLink to="/about" class="link">About</NuxtLink>
  <UCard>
    <template #header>
      <h3>Card Title</h3>
    </template>
    <template #default>
      <p>Card Content</p>
    </template>
    <template #footer>
      <UButton>Button</UButton>
    </template>
  </UCard>
</template>

<style scoped>
.link {
  color: blue;
  text-decoration: underline;
}
</style>