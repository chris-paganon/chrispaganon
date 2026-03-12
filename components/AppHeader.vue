<template>
  <header>
    <NavBar />
  </header>
</template>

<style scoped>
header {
  position: absolute;
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: transparent;
  padding: 18px 24px 0 24px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  header {
    padding: 14px 16px 0 16px;
  }
}
</style>
