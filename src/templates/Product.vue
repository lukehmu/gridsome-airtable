<template>
  <layout>
    <div class="container">
      <h1> {{ $page.product.name }} </h1>
      <p> £{{ $page.product.price }} </p>
    </div>
  </layout>
</template>

<page-query>
query Product($id: ID!) {
  product(id: $id) {
    name
    price
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.product.name,
    }
  },
}
</script>
