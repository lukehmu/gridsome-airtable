<template>
  <layout>
    <div class="container">
      <ul>
        <li
          v-for="product in $page.allProduct.edges"
          :key="product.node.id"
        >
          <g-link
            :to="product.node.path"
          >
            {{ product.node.name }}
          </g-link>
        </li>
      </ul>
    </div>
  </layout>
</template>

<page-query>
query Products {
  allProduct {
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>
