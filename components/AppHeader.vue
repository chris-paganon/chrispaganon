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
  padding: 18px 18px 0 18px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  header {
    padding: 10px 10px 0 10px;
  }
}
@media (max-width: 420px) {
  header {
    padding: 5px 5px 0 5px;
  }
}
@media (max-width: 375px) {
  header {
    padding: 0;
  }
}
</style>
