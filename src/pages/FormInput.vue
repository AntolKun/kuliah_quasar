<template>
  <q-page padding>
    Form Input
    <q-btn :to="{ name: 'indexPage' }">Back</q-btn>
    <div class="row q-col-gutter-x-md">
      <div
        class="col-md-4 col-xs-12"
        v-for="(barang, i) in listBarang"
        :key="i"
      >
        <my-card :namaBarang="barang.name" :harga="barang.harga">
          <template v-slot:action>
            <q-btn color="primary" unelevated class="full-width">Buy</q-btn>
          </template>
        </my-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import myCard from "./MyCard.vue";
export default {
  components: { myCard },
  data() {
    return {
      listBarang: [
        {
          name: "Laptop Asu",
          harga: 5000000,
        },
        {
          name: "Motor Ducati",
          harga: 600000000,
        },
        {
          name: "Mobil Wulung",
          harga: 20000000,
        },
      ],
    };
  },
};
</script>
