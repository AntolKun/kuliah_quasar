<template>
  <q-card flat>
    <q-card-section> Barang </q-card-section>
    <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-card-section>
      <div>Nama Barang: {{ namaBarang }}</div>
      <div>Harga Barang: {{ harga }}</div>
    </q-card-section>
    <q-card-actions>
      <slot name="action"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    namaBarang: {
      default: null,
      type: String,
    },
    harga: {
      default: 0,
      type: Number,
    },
  },
};
</script>
